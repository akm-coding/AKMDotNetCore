using AKMDotNetCoreConsoleApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace AKMDotNetCore.ConsoleApp.HttpClientExamples
{
    internal class HttpClientExample
    {
        public async Task Run()
        {
            //await Read();
            await Edit(2011);
            ////await Create("test", "test", "test");
            //await Update(2011, "test", "test", "test");
            //await Delete(3000);
            //await Delete(2023);
        }

        private async Task Read()
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("https://localhost:7191/api/blog");
            if (response.IsSuccessStatusCode)
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogListResponseModel>(jsonStr);
                foreach (var item in model!.Data)
                {
                    Console.WriteLine(item.Blog_Id);
                    Console.WriteLine(item.Blog_Title);
                    Console.WriteLine(item.Blog_Author);
                    Console.WriteLine(item.Blog_Content);
                }
            }
        }

        private async Task Edit(int id)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync($"https://localhost:7191/api/blog/{id}");
            if (response.IsSuccessStatusCode)
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                var item = model!.Data;
                Console.WriteLine(item.Blog_Id);
                Console.WriteLine(item.Blog_Title);
                Console.WriteLine(item.Blog_Author);
                Console.WriteLine(item.Blog_Content);
            }
            else
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                Console.WriteLine(model.Message);
            }
        }

        private async Task Create(string title, string author, string content)
        {
            BlogDataModel blog = new BlogDataModel
            {
                Blog_Title = title,
                Blog_Author = author,
                Blog_Content = content
            };
            string jsonBlog = JsonConvert.SerializeObject(blog);
            HttpContent httpContent = new StringContent(jsonBlog, Encoding.UTF8, Application.Json);

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.PostAsync("https://localhost:7191/api/blog", httpContent);
            if (response.IsSuccessStatusCode)
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                await Console.Out.WriteLineAsync(model.Message);
            }
        }

        private async Task Update(int id, string title, string author, string content)
        {
            BlogDataModel blog = new BlogDataModel
            {
                Blog_Title = title,
                Blog_Author = author,
                Blog_Content = content
            };
            string jsonBlog = JsonConvert.SerializeObject(blog);
            HttpContent httpContent = new StringContent(jsonBlog, Encoding.UTF8, Application.Json);

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.PutAsync($"https://localhost:7062/api/blog/{id}", httpContent);
            if (response.IsSuccessStatusCode)
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                await Console.Out.WriteLineAsync(model.Message);
            }
            else
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                Console.WriteLine(model.Message);
            }
        }

        private async Task Delete(int id)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.DeleteAsync($"https://localhost:7062/api/blog/{id}");
            if (response.IsSuccessStatusCode)
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                Console.WriteLine(model.Message);
            }
            else
            {
                string jsonStr = await response.Content.ReadAsStringAsync();
                var model = JsonConvert.DeserializeObject<BlogResponseModel>(jsonStr);
                Console.WriteLine(model.Message);
            }
        }
    }
}
