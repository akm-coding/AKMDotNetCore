using AKMDotNetCore.MvcApp.Models;
using Refit;

namespace AKMDotNetCore.MvcApp.Interfaces
{
    public interface IBlogApi
    {
        [Get("/api/blog")]
        Task<BlogListResponseModel> GetBlogs();

        [Get("/api/blog/{id}")]
        Task<BlogResponseModel> GetBlog(int id);

        [Post("/api/blog")]
        Task<BlogResponseModel> CreatBlog(BlogDataModel blog);

        [Put("/api/blog/{id}")]
        Task<BlogResponseModel> UpdateBlog(int id, BlogDataModel blog);

        [Delete("/api/blog/{id}")]
        Task<BlogResponseModel> DeleteBlog(int id);
    }
}
