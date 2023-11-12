// See https://aka.ms/new-console-template for more information
using System.Data;
using System.Data.SqlClient;

Console.WriteLine("Hello, World!");

SqlConnectionStringBuilder connectionStringBuilder = new SqlConnectionStringBuilder()
{
    DataSource = ".", //server name
    InitialCatalog = "AKMDotNetCore", //database name
    UserID = "sa",
    Password = "sa@123",
};
SqlConnection connection = new SqlConnection(connectionStringBuilder.ConnectionString);
Console.WriteLine("Connection Opening...");
connection.Open();
Console.WriteLine("Connection Opened.");

string query = ("select * from tbl_blog");
SqlCommand cmd = new SqlCommand(query,connection);
SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
DataTable dt = new DataTable();
dataAdapter.Fill(dt);

Console.WriteLine("Connection Closing...");
connection.Close();
Console.WriteLine("Connection Closed.");

foreach (DataRow row in dt.Rows)
{
    Console.WriteLine(row["Blog_Id"]); 
    Console.WriteLine(row["Blog_Title"]); 
    Console.WriteLine(row["Blog_Author"]); 
    Console.WriteLine(row["Blog_Content"]);
}

Console.ReadKey();