using Microsoft.AspNetCore.Mvc;

namespace AKMDotNetCore.MvcApp.Controllers
{
    public class BlogHttpClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
