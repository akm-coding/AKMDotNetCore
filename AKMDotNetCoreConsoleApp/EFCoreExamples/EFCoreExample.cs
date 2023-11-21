using AKMDotNetCoreConsoleApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKMDotNetCoreConsoleApp.EFCoreExamples
{
    public class EFCoreExample
    {
        private readonly AppDbContext _dbContext;

        public EFCoreExample()
        {
            _dbContext = new AppDbContext();
        }

        public void Run()
        {
            Read();
            //Edit(2);
            //Edit(300);
        }

        private void Read()
        {
            List<BlogDataModel> lst = _dbContext.Blogs.ToList();

            foreach (var item in lst)
            {
                Console.WriteLine(item.Blog_Id);
                Console.WriteLine(item.Blog_Title);
                Console.WriteLine(item.Blog_Author);
                Console.WriteLine(item.Blog_Content);
            }
        }

        private void Edit(int id)
        {
            BlogDataModel? item = _dbContext.Blogs.FirstOrDefault(x=>x.Blog_Id == id);

            if(item is null)
            {
                Console.WriteLine("No data found.");
                return;
            }

            Console.WriteLine(item.Blog_Id);
            Console.WriteLine(item.Blog_Title);
            Console.WriteLine(item.Blog_Author);
            Console.WriteLine(item.Blog_Content);

        }
    }
}
