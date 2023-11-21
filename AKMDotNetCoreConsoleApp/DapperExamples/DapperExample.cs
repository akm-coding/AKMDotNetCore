using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using AKMDotNetCoreConsoleApp.Models;

namespace AKMDotNetCoreConsoleApp.DapperExamples
{
    public class DapperExample
    {
        private readonly SqlConnectionStringBuilder sqlConnectionStringBuilder;

        public DapperExample()
        {
            sqlConnectionStringBuilder = new SqlConnectionStringBuilder
            {
                DataSource = ".", // server name
                InitialCatalog = "AKMDotNetCore",
                UserID = "sa",
                Password = "sa@123",
            };
        }

        public void Run()
        {
            //Read();
            Create("Moe Moe Inya", "Inya", "Hello World!");
            //Edit(3);
            //Edit(300);
            //Update(3, "Hi", "Hello", "Halo");
            //Delete(3);
        }

        private void Read()
        {
            #region Read / Retrieve

            string query = "select * from tbl_blog";
            IDbConnection db = new SqlConnection(sqlConnectionStringBuilder.ConnectionString);
            //List<dynamic> lst = db.Query(query).ToList();
            List<BlogDataModel> lst = db.Query<BlogDataModel>(query).ToList();

            foreach( var item in lst )
            {
                Console.WriteLine(item.Blog_Id);
                Console.WriteLine(item.Blog_Title);
                Console.WriteLine(item.Blog_Author);
                Console.WriteLine(item.Blog_Content);
            }

            #endregion
        }

        #region Edit
        private void Edit(int id)
        {
            BlogDataModel blog = new BlogDataModel()
            {
                Blog_Id = id,
            };

            string query = "select * from tbl_blog where Blog_Id = @Blog_Id";
            IDbConnection db = new SqlConnection(sqlConnectionStringBuilder.ConnectionString);
            //List<dynamic> lst = db.Query(query).ToList();
            List<BlogDataModel> lst = db.Query<BlogDataModel>(query,blog).ToList();

            foreach (var item in lst)
            {
                Console.WriteLine(item.Blog_Id);
                Console.WriteLine(item.Blog_Title);
                Console.WriteLine(item.Blog_Author);
                Console.WriteLine(item.Blog_Content);
            }
        }
        #endregion

        private void Create(string title, string author, string content)
        {
            #region Create

            SqlConnection connection = new SqlConnection(sqlConnectionStringBuilder.ConnectionString);
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

            string message = result > 0 ? "Saving Successful." : "Saving Failed.";
            Console.WriteLine(message);

            #endregion
        }
        
        #region Update
        private void Update(int id, string title, string author, string content)
        {
            SqlConnection connection = new SqlConnection(sqlConnectionStringBuilder.ConnectionString);
            connection.Open();

            string query = @"UPDATE [dbo].[Tbl_Blog]
                           SET [Blog_Title] = @Blog_Title
                              ,[Blog_Author] = @Blog_Author
                              ,[Blog_Content] = @Blog_Content
                         WHERE Blog_Id = @Blog_Id";
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Blog_Id", id);
            cmd.Parameters.AddWithValue("@Blog_Title", title);
            cmd.Parameters.AddWithValue("@Blog_Author", author);
            cmd.Parameters.AddWithValue("@Blog_Content", content);
            int result = cmd.ExecuteNonQuery();

            connection.Close();

            string message = result > 0 ? "Updating Successful." : "Updating Failed.";
            Console.WriteLine(message);

        }
        #endregion

        #region Delete
        private void Delete(int id)
        {
            
            SqlConnection connection = new SqlConnection(sqlConnectionStringBuilder.ConnectionString);
            connection.Open();
            string query = @"DELETE FROM [dbo].[Tbl_Blog] WHERE Blog_Id = @Blog_Id";
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Blog_Id", id);
            int result = cmd.ExecuteNonQuery();
            connection.Close();
            string message = result > 0 ? "Deleting successfully!" : "Deleting Failed!";
            Console.WriteLine(message);
           
        }
        #endregion
    }
}
