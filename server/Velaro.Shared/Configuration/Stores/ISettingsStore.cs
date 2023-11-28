namespace Velaro.Shared.Configuration.Stores
{
    public interface ISettingsStore
    {
        Task<string> GetVersionAsync();
        Task<Dictionary<string, string>> FindAllAsync();
    }
}