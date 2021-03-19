using System;

namespace example
{
    class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args);
        }

        public static void BuildWebHost(string[] args)
        {
            string debugPort = Environment.GetEnvironmentVariable("DEBUG_PORT");
            var s = "\t text \r\n";
            string host = string.Empty;
            if (!string.IsNullOrEmpty(debugPort))
            {
                host = $"http://localhost:{debugPort}";
            }

#if DEBUG
            var result = @"string to""a split".Split('a', '\t');
#else
#endif
        }

#region Test region
#endregion


        public delegate TResult MyFunction<out TResult, in TParam>(TParam param);
    }

    public interface ISomething : IDisposable
    {
    }

    public interface ISomethingGeneric<T> : IDisposable
        where T : class, new()
    {
        ISomething Something { get; set; }
        ISomethingGeneric<T> Do(T arg);
        string S { get; set; }
    }

    [Flags]
    internal enum CustomEnum
    {
        Value1 = 1,
        Value2 = 4
    }
}
