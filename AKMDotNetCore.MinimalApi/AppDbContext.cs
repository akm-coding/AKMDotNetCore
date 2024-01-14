using AKMDotNetCore.MinimalApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AKMDotNetCore.MinimalApi
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<BlogDataModel> Blogs { get; set; }
    }
}
