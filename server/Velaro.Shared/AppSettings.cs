using System.Data;
using Velaro.Shared.Configuration;
using Velaro.Shared.Configuration.Stores;

namespace Velaro.Shared
{
    public static class AppSettings
    {
        private static readonly Lazy<ExternalConfigurationManager> ConfiguredInstance = new(() =>
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            ISettingsStore settingsStore;

            if (environment == "Development")
            {
                settingsStore = new FileSystemSettingsStore();
            }
            else
            {
                settingsStore = new BlobSettingsStore(environment);
            }

            return new ExternalConfigurationManager(settingsStore, environment);
        });

        public static ExternalConfigurationManager ExternalConfiguration => ConfiguredInstance.Value;

        public static string AspNetCoreEnvironment => GetValue("ASPNETCORE_ENVIRONMENT", "Development");
        public static string FileStorageConnectionString => GetValue("FILE_STORAGE_CONNECTION_STRING", "UseDevelopmentStorage=true");
        public static string LogStorageConnectionString => GetValue("LOG_STORAGE_CONNECTION_STRING");
        public static string ConfigStorageConnectionString => GetValue("CONFIG_STORAGE_CONNECTION_STRING");
        public static string ConfigStorageContainerName => GetValue("CONFIG_STORAGE_CONTAINER_NAME");
        public static string ReadWriteConnectionString => ExternalConfiguration.GetAppSetting("ReadWriteConnectionString");
        public static string ReadOnlyConnectionString => ExternalConfiguration.GetAppSetting("ReadOnlyConnectionString");
        public static string FacebookAppId => ExternalConfiguration.GetAppSetting("FacebookAppId");
        public static string FacebookAppSecret => ExternalConfiguration.GetAppSetting("FacebookAppSecret");
        public static string FacebookWebhookVerifyToken => ExternalConfiguration.GetAppSetting("FacebookWebhookVerifyToken");
        public static string WhatsAppWebhookVerifyToken => ExternalConfiguration.GetAppSetting("WhatsAppWebhookVerifyToken");
        public static string TwitterApiKey => ExternalConfiguration.GetAppSetting("TwitterApiKey");
        public static string TwitterApiSecretKey => ExternalConfiguration.GetAppSetting("TwitterApiSecretKey");
        public static string TwitterDevEnvironment => ExternalConfiguration.GetAppSetting("TwitterDevEnvironment");
        public static string TwitterCallbackUrl => ExternalConfiguration.GetAppSetting("TwitterCallbackUrl");
        public static string JwtSecret => ExternalConfiguration.GetAppSetting("JwtSecret");
        public static string EncryptionKey => ExternalConfiguration.GetAppSetting("EncryptionKey");
        public static string AuthServerUrl => ExternalConfiguration.GetAppSetting("AuthServerUrl");
        public static string AuthServerSecret => ExternalConfiguration.GetAppSetting("AuthServerSecret");
        public static string AdminClientUrl => ExternalConfiguration.GetAppSetting("AdminClientUrl");
        public static string MessagingClientUrl => ExternalConfiguration.GetAppSetting("MessagingClientUrl");
        public static string CognitiveServicesApiKey => ExternalConfiguration.GetAppSetting("CognitiveServicesApiKey");
        public static string CognitiveServicesUrl => ExternalConfiguration.GetAppSetting("CognitiveServicesUrl");
        public static string TwilioAccountSid => ExternalConfiguration.GetAppSetting("TwilioAccountSid");
        public static string TwilioAuthToken => ExternalConfiguration.GetAppSetting("TwilioAuthToken");
        public static string TwilioNumber => ExternalConfiguration.GetAppSetting("TwilioNumber");
        public static string NetSuiteConsumerKey => ExternalConfiguration.GetAppSetting("NetSuiteConsumerKey");
        public static string NetSuiteConsumerSecret => ExternalConfiguration.GetAppSetting("NetSuiteConsumerSecret");
        public static string NetSuiteCallbackUrl => ExternalConfiguration.GetAppSetting("NetSuiteCallbackUrl");
        public static string AntiVirusServer => ExternalConfiguration.GetAppSetting("AntiVirusServer");
        public static string SendgridApiKey => ExternalConfiguration.GetAppSetting("SendgridApiKey");
        public static string MailgunApiKey => ExternalConfiguration.GetAppSetting("MailgunApiKey");
        public static string GoogleTranslateApiKey => ExternalConfiguration.GetAppSetting("GoogleTranslateApiKey");
        public static string ConfigDatabaseConnectionString => ExternalConfiguration.GetAppSetting("ConfigDatabaseConnectionString");
        public static string MessagingApiUrl => ExternalConfiguration.GetAppSetting("MessagingApiUrl");
        public static string V10MainApiUrl => ExternalConfiguration.GetAppSetting("V10MainApiUrl");
        public static string VelaroAuthKey => ExternalConfiguration.GetAppSetting("VelaroAuthKey");
        public static string DefaultHeadshotUrl => ExternalConfiguration.GetAppSetting("DefaultHeadshotUrl");
        public static string RedisConnection => ExternalConfiguration.GetAppSetting("RedisConnection");
        public static string AutomationApiUrl => ExternalConfiguration.GetAppSetting("AutomationApiUrl");
        public static string SoundsUrl => ExternalConfiguration.GetAppSetting("SoundsUrl");
        public static string BotDatabaseConnectionString => ExternalConfiguration.GetAppSetting("BotDatabaseConnectionString");
        public static string AutomationClientUrl => ExternalConfiguration.GetAppSetting("AutomationClientUrl");

        private static string GetValue(string variable)
        {
            return Environment.GetEnvironmentVariable(variable) ??
                throw new NoNullAllowedException($"{variable} configuration missing");
        }

        private static string GetValue(string variable, string fallbackValue)
        {
            return Environment.GetEnvironmentVariable(variable) ?? fallbackValue;
        }
    }
}
