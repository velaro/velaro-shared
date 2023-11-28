using System.Security.Cryptography;
using System.Text;
using System.Xml.Linq;

namespace Velaro.Shared.Configuration.Stores
{
    public class FileSystemSettingsStore : ISettingsStore
    {
        private const string FilePath = @"c:\velaro\admin.development.config";

        public async Task<Dictionary<string, string>> FindAllAsync()
        {
            return await ReadSettingsFromFileSystemAsync().ConfigureAwait(false);
        }

        public Task<string> GetVersionAsync()
        {
            using (var md5 = MD5.Create())
            using (var stream = File.OpenRead(FilePath))
            {
                var version = Encoding.Default.GetString(md5.ComputeHash(stream));
                return Task.FromResult(version);
            }
        }

        private Task<Dictionary<string, string>> ReadSettingsFromFileSystemAsync()
        {
            var xml = XElement.Load(FilePath);

            var dict = xml.Descendants("add")
                .ToDictionary(x => x.Attribute("key")!.Value, x => x.Attribute("value")!.Value);

            return Task.FromResult(dict);
        }
    }
}