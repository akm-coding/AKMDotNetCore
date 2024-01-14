using AKMDotNetCore.MvcApp.Interfaces;
using AKMDotNetCore.MvcApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace AKMDotNetCore.MvcApp.Controllers
{
    public class BlogRefitController : Controller
    {
        private readonly IBlogApi _blogApi;

        public BlogRefitController(IBlogApi blogApi)
        {
            _blogApi = blogApi;
        }

        [ActionName("Index")]
        public async Task<IActionResult> BlogIndex()
        {
            var model = await _blogApi.GetBlogs();
            return View("BlogIndex", model);
        }

        [ActionName("Create")]
        public IActionResult BlogCreate()
        {
            return View("BlogCreate");
        }

        [HttpPost]
        [ActionName("Save")]
        public async Task<IActionResult> BlogSave(BlogDataModel reqModel)
        {
            var model = await _blogApi.CreatBlog(reqModel);
            return Redirect("/blogrefit");
        }

        [ActionName("Edit")]
        public async Task<IActionResult> BlogEdit(int id)
        {
            var model = await _blogApi.GetBlog(id);
            return View("BlogEdit", model);
        }

        [HttpPost]
        [ActionName("Update")]
        public async Task<IActionResult> BlogUpdate(int id, BlogDataModel reqModel)
        {
            var model = await _blogApi.UpdateBlog(id, reqModel);
            return Redirect("/blogrefit");
        }

        [ActionName("Delete")]
        public async Task<IActionResult> BlogDelete(int id)
        {
            var model = await _blogApi.DeleteBlog(id);
            return Redirect("/blogrefit");
        }
    }
}
