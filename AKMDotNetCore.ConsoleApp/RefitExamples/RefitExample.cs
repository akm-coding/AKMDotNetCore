using AKMDotNetCoreConsoleApp.Models;
using Refit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKMDotNetCore.ConsoleApp.RefitExamples
{
    internal class RefitExample
    {
        private readonly IBlogApi _blogApi = RestService.For<IBlogApi>("https://localhost:7191");

        public async Task Run()
        {
            //await Read();
            //await Edit(2023);
            //await Create("test 1", "test 2", "test 3");
            //await Update(2023, "A", "B", "C");
            //await Delete(3060);
        }

        private async Task Read()
        {
            var model = await _blogApi.GetBlogs();
            foreach (var item in model!.Data)
            {
                Console.WriteLine(item.Blog_Id);
                Console.WriteLine(item.Blog_Title);
                Console.WriteLine(item.Blog_Author);
                Console.WriteLine(item.Blog_Content);
            }
        }

        private async Task Edit(int id)
        {
            var model = await _blogApi.GetBlog(id);
            var item = model.Data;
            Console.WriteLine(item.Blog_Id);
            Console.WriteLine(item.Blog_Title);
            Console.WriteLine(item.Blog_Author);
            Console.WriteLine(item.Blog_Content);
        }

        private async Task Create(string title, string author, string content)
        {
            BlogDataModel blog = new BlogDataModel
            {
                Blog_Title = title,
                Blog_Author = author,
                Blog_Content = content
            };
            var model = await _blogApi.CreatBlog(blog);
            await Console.Out.WriteLineAsync(model.Message);
        }

        private async Task Update(int id, string title, string author, string content)
        {
            BlogDataModel blog = new BlogDataModel
            {
                Blog_Title = title,
                Blog_Author = author,
                Blog_Content = content
            };
            var model = await _blogApi.UpdateBlog(id, blog);
            await Console.Out.WriteLineAsync(model.Message);
        }

        private async Task Delete(int id)
        {
            var model = await _blogApi.DeleteBlog(id);
            await Console.Out.WriteLineAsync(model.Message);
        }
    }
}
