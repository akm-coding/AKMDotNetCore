// See https://aka.ms/new-console-template for more information
using AKMDotNetCoreConsoleApp.AdoDotNetExamples;
using AKMDotNetCoreConsoleApp.DapperExamples;
using AKMDotNetCoreConsoleApp.EFCoreExamples;
using System.Data;
using System.Data.SqlClient;

Console.WriteLine("Hello, World!");

//AKMDotNetCoreExample adoDotNetExample = new AKMDotNetCoreExample();
//adoDotNetExample.Run();

//DapperExample dapperExample = new DapperExample();
//dapperExample.Run();

EFCoreExample eFCoreExample = new EFCoreExample();
eFCoreExample.Run();


Console.ReadKey();