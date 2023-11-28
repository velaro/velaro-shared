using System.Xml.Linq;
using Azure.Storage.Blobs;

namespace Velaro.Shared.Configuration.Stores
{
    public class BlobSettingsStore : ISettingsStore
    {
        private readonly BlobClient _blobClient;

        public BlobSettingsStore(string environment)
        {
            var connectionString = AppSettings.ConfigStorageConnectionString;
            var containerName = AppSettings.ConfigStorageContainerName;
            var blobServiceClient = new BlobServiceClient(connectionString);
            var containerClient = blobServiceClient.GetBlobContainerClient(containerName);
            _blobClient = containerClient.GetBlobClient("messaging." + environment.ToLower() + ".config");
        }

        public async Task<string> GetVersionAsync()
        {
            try
            {
                var properties = await _blobClient.GetPropertiesAsync().ConfigureAwait(false);
                return properties.Value.ETag.ToString();
            }
            catch(Exception)
            {
                Console.WriteLine($"An error occurred while attempting to read {_blobClient.Uri}. Are you sure it exists?");
                throw;
            }
        }

        public async Task<Dictionary<string, string>> FindAllAsync()
        {
            return await ReadSettingsFromStorageAsync().ConfigureAwait(false);
        }

        private async Task<Dictionary<string, string>> ReadSettingsFromStorageAsync()
        {
            XElement configFile;

            // Read the configuration blob and return the settings as a Dictionary.
            using var stream = new MemoryStream();
            using (await _blobClient.DownloadToAsync(stream).ConfigureAwait(false))
            {
                stream.Position = 0;

                using (var reader = new StreamReader(stream))
                {
                    configFile = XElement.Parse(await reader.ReadToEndAsync().ConfigureAwait(false));
                }
            }

            return configFile.Descendants("add")
                .ToDictionary(x => x.Attribute("key")!.Value, x => x.Attribute("value")!.Value);
        }
    }
}
