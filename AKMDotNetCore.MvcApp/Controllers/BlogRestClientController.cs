using Microsoft.AspNetCore.Mvc;

namespace AKMDotNetCore.MvcApp.Controllers
{
    public class BlogRestClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
