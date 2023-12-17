using AKMDotNetCore.MvcApp.EFDbContext;
using AKMDotNetCore.MvcApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AKMDotNetCore.MvcApp.Controllers
{
    public class BlogAjaxController : Controller
    {
        private readonly AppDbContext _context;

        public BlogAjaxController(AppDbContext context)
        {
            _context = context;
        }

        [ActionName("List")]
        public async Task<IActionResult> BlogList(int pageNo = 1, int pageSize = 5)
        {
            BlogDataResponseModel model = new BlogDataResponseModel();

            List<BlogDataModel> lst = _context.Blogs.AsNoTracking().Skip((pageNo - 1) * pageSize).Take(pageSize).ToList();

            int rowCount = await _context.Blogs.CountAsync();
            int pageCount = rowCount / pageSize;
            if (rowCount % pageSize > 0)
            {
                pageCount++;
            }

            model.Blogs = lst;
            model.PageSetting = new PageSettingModel(pageNo, pageSize, pageCount, "/blogajax/list");

            return View("BlogList", model);
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
            await _context.Blogs.AddAsync(reqModel);
            var result = await _context.SaveChangesAsync();
            string message = result > 0 ? "Saving Successful!" : "Saving Failed!";
            TempData["Message"] = message;
            TempData["IsSuccess"] = result > 0;

            MessageModel model = new MessageModel(result > 0, message);
            return Json(model);
        }

        [ActionName("Edit")]
        public async Task<IActionResult> BlogEdit(int id)
        {
            if (!await _context.Blogs.AsNoTracking().AnyAsync(x => x.Blog_Id == id))
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list");
            }

            var blog = await _context.Blogs.AsNoTracking().FirstOrDefaultAsync(x => x.Blog_Id == id);
            if (blog is null)
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list");
            }

            MessageModel model = new MessageModel(true, "data");

            return Json(model, blog);

            //return View("BlogEdit", blog);
        }

        [HttpPost]
        [ActionName("Update")]
        public async Task<IActionResult> BlogUpdate(int id, BlogDataModel reqModel)
        {
            if (!await _context.Blogs.AsNoTracking().AnyAsync(x => x.Blog_Id == id))
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list");
            }

            var blog = await _context.Blogs.FirstOrDefaultAsync(x => x.Blog_Id == id);
            if (blog is null)
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list");
            }

            blog.Blog_Title = reqModel.Blog_Title;
            blog.Blog_Author = reqModel.Blog_Author;
            blog.Blog_Content = reqModel.Blog_Content;

            int result = _context.SaveChanges();

            string message = result > 0 ? "Updating Successful." : "Updating Failed.";
            TempData["Message"] = message;
            TempData["IsSuccess"] = result > 0;

            MessageModel model = new MessageModel(result > 0, message);

            return Json(model);
        }

        [ActionName("Delete")]
        public async Task<IActionResult> BlogDelete(int id)
        {
            if (!await _context.Blogs.AsNoTracking().AnyAsync(x => x.Blog_Id == id))
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list");
            }

            var blog = await _context.Blogs.FirstOrDefaultAsync(x => x.Blog_Id == id);
            if (blog is null)
            {
                TempData["Message"] = "No data found.";
                TempData["IsSuccess"] = false;
                return Redirect("/blogajax/list ");
            }

            _context.Remove(blog);
            int result = _context.SaveChanges();

            string message = result > 0 ? "Deleting Successful." : "Deleting Failed.";
            TempData["Message"] = message;
            TempData["IsSuccess"] = result > 0;

            MessageModel model = new MessageModel(result > 0, message);

            return Json(model);
        }
    }
}
