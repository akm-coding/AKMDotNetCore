using AKMDotNetCore.LoginWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AKMDotNetCore.LoginWebApp.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            var str = HttpContext.Session.GetString("LoginData");
            if (str is not null) return Redirect("/");
            return View();
        }

        [HttpPost]
        public IActionResult Index(LoginViewModel requestModel)
        {
            HttpContext.Session.SetString("LoginData", JsonConvert.SerializeObject(requestModel));
            return Redirect("/");
        }
    }
}
