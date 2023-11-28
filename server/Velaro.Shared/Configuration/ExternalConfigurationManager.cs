using System.Reactive.Linq;
using System.Reactive.Subjects;
using Velaro.Shared.Configuration.Stores;

namespace Velaro.Shared.Configuration
{
    public class ExternalConfigurationManager : IDisposable
    {
        private readonly ISettingsStore _settings;
        private readonly ISubject<KeyValuePair<string, string>> _changed;
        private readonly CancellationTokenSource _cts = new();
        private Task _monitoringTask;
        private readonly TimeSpan _interval = TimeSpan.FromSeconds(15);
        private readonly SemaphoreSlim _timerSemaphore = new(1);
        private readonly ReaderWriterLockSlim _settingsCacheLock = new();
        private readonly SemaphoreSlim _syncCacheSemaphore = new(1);
        private Dictionary<string, string> _settingsCache;
        private string _currentVersion;

        public ExternalConfigurationManager(ISettingsStore settings, string environment)
        {
            _settings = settings ?? throw new ArgumentNullException(nameof(settings));

            // check for configuration changes with no synchronization context to avoid deadlock.
            CheckForConfigurationChangesAsync().GetAwaiter().GetResult();

            _changed = new Subject<KeyValuePair<string, string>>();
            Environment = environment;
        }

        public string Environment { get; }

        public IObservable<KeyValuePair<string, string>> Changed => _changed.AsObservable();

        /// <summary>
        /// Check to see if the current instance is monitoring for changes
        /// </summary>
        public bool IsMonitoring => _monitoringTask?.IsCompleted == false;

        /// <summary>
        /// Start the background monitoring for configuration changes in the central store
        /// </summary>
        public void StartMonitor()
        {
            if (IsMonitoring)
            {
                return;
            }

            try
            {
                _timerSemaphore.Wait();

                //Check again to make sure we are not already running.
                if (IsMonitoring)
                {
                    return;
                }

                //Start running our task loop.
                _monitoringTask = ConfigChangeMonitor();
            }
            finally
            {
                _timerSemaphore.Release();
            }
        }

        /// <summary>
        /// Loop that monitors for configuration changes
        /// </summary>
        public async Task ConfigChangeMonitor()
        {
            while (!_cts.Token.IsCancellationRequested)
            {
                await CheckForConfigurationChangesAsync().ConfigureAwait(false);
                await Task.Delay(_interval, _cts.Token).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// Stop Monitoring for Configuration Changes
        /// </summary>
        public void StopMonitor()
        {
            try
            {
                _timerSemaphore.Wait();

                // signal the task to stop
                _cts.Cancel();

                // wait for the loop to stop
                _monitoringTask.Wait();

                _monitoringTask = null;
            }
            finally
            {
                _timerSemaphore.Release();
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if(disposing)
            {
                _cts.Cancel();
                _cts.Dispose();
                _timerSemaphore.Dispose();
                _settingsCacheLock.Dispose();
                _syncCacheSemaphore.Dispose();
            }
        }

        /// <summary>
        /// Retrieve application setting from the local cache
        /// </summary>
        public string GetAppSetting(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentNullException(nameof(key), "Value cannot be null or empty.");
            }

            // Try and get the value from the settings cache.  If there's a miss, 
            // get the setting from the settings store and refresh the settings cache.

            string value;

            try
            {
                _settingsCacheLock.EnterReadLock();
                _settingsCache.TryGetValue(key, out value);
            }
            finally
            {
                _settingsCacheLock.ExitReadLock();
            }

            return value;
        }

        /// <summary>
        /// Check the central repository for configuration changes and update the local cache
        /// </summary>
        private async Task CheckForConfigurationChangesAsync()
        {
            try
            {
                // It is assumed that updates are infrequent.
                // To avoid race conditions in refreshing the cache synchronize access to the in memory cache
                await _syncCacheSemaphore.WaitAsync().ConfigureAwait(false);

                var latestVersion = await _settings.GetVersionAsync().ConfigureAwait(false);

                // If the versions are the same, nothing has changed in the configuration.
                if (_currentVersion == latestVersion) return;

                // Get the latest settings from the settings store and publish changes.
                var latestSettings = await _settings.FindAllAsync().ConfigureAwait(false);

                // Refresh the settings cache.
                try
                {
                    _settingsCacheLock.EnterWriteLock();

                    if (_settingsCache != null)
                    {
                        // Notify settings changed
                        latestSettings.Except(_settingsCache).ToList().ForEach(kv => _changed.OnNext(kv));
                    }

                    _settingsCache = latestSettings;
                }
                finally
                {
                    _settingsCacheLock.ExitWriteLock();
                }

                // Update the current version.
                _currentVersion = latestVersion;
            }
            catch (Exception ex)
            {
                _changed.OnError(ex);
            }
            finally
            {
                _syncCacheSemaphore.Release();
            }
        }
    }
}
