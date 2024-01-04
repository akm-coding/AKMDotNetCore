using AKMDotNetCore.ATMWebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace AKMDotNetCore.ATMWebApp
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<UserModel> User { get; set; }
    }
}
