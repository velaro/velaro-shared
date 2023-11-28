using NLog;

namespace Velaro.Shared.Configuration
{
    public static class LogConfiguration
    {
        public static void Initialize()
        {
            var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            LogManager.Configuration.Variables["environment"] = env;
        }
    }
}
