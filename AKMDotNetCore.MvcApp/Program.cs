using AKMDotNetCore.MvcApp.EFDbContext;
using AKMDotNetCore.MvcApp.Interfaces;
using Microsoft.EntityFrameworkCore;
using Refit;
using RestSharp;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    string? connectionString = builder.Configuration.GetConnectionString("DbConnection");
    options.UseSqlServer(connectionString);
},
ServiceLifetime.Transient,
ServiceLifetime.Transient);

#region Refit

builder.Services
    .AddRefitClient<IBlogApi>()
    .ConfigureHttpClient(c => c.BaseAddress = new Uri(builder.Configuration.GetSection("ApiUrl").Value!));

#endregion

#region HttpClient

//builder.Services.AddScoped<HttpClient>();
builder.Services.AddScoped(x => new HttpClient
{
    BaseAddress = new Uri(builder.Configuration.GetSection("ApiUrl").Value!)
});

#endregion

#region RestClient

builder.Services.AddScoped(x => new RestClient(builder.Configuration.GetSection("ApiUrl").Value!));

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();