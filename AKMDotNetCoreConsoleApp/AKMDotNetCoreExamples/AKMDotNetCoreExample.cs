using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Reflection.Metadata;

namespace AKMDotNetCoreConsoleApp.AKMDotNetCoreExamples
{
    public class AKMDotNetCoreExample
    {

        public void Run()
        {
            Read();
            Create("Moe Moe Inya", "Inya", "Hello World!");
        }

        private void Read()
        {
            #region Read / Retrieve
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
            SqlCommand cmd = new SqlCommand(query, connection);
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
            #endregion
        }

        private void Create(string title, string author, string content)
        {
            #region Create
            SqlConnectionStringBuilder connectionStringBuilder = new SqlConnectionStringBuilder()
            {
                DataSource = ".", //server name
                InitialCatalog = "AKMDotNetCore", //database name
                UserID = "sa",
                Password = "sa@123",
            };
            SqlConnection connection = new SqlConnection(connectionStringBuilder.ConnectionString);
            connection.Open();
             string query = @"INSERT INTO [dbo].[Tbl_Blog]
           ([Blog_Title]
           ,[Blog_Author]
           ,[Blog_Content])
     VALUES
           (@Blog_Title
           ,@Blog_Author
           ,@Blog_Content)";
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Blog_Title", title);
            cmd.Parameters.AddWithValue("@Blog_Author", author);
            cmd.Parameters.AddWithValue("@Blog_Content", content);
            int result = cmd.ExecuteNonQuery();

            connection.Close();
            string message = result > 0 ? "Saving Successfully!" : "Saving Failed!";
            Console.WriteLine(message);
            #endregion
        }
    }
}
