using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Test.App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            var host = WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
            var debugPort = Environment.GetEnvironmentVariable("DEBUG_PORT");
            if (!string.IsNullOrEmpty(debugPort))
            {
                host = host.UseUrls($"http://localhost:{debugPort}");
            }

            return host.Build();
        }
    }

    public interface ISomething : IDisposable
    {

    }

    public interface ISomethingGeneric<T> : IDisposable
        where T : class, new()
    {
        ISomething Something { get; set; }
        ISomethingGeneric<T> Do(T arg);
    }
}
