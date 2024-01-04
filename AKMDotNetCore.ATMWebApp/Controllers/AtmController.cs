using AKMDotNetCore.ATMWebApp;
using AKMDotNetCore.ATMWebApp.Models;
using AKMDotNetCore.MvcApp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;
using System.Reflection.Metadata;

namespace AKMDotNetCore.MvcApp
{
    public class AtmController : Controller
    {
		private readonly AppDbContext _context;

		public AtmController(AppDbContext context)
		{
			_context = context;
		}

		[ActionName("Index")]
        public IActionResult AtmIndex()
        {
            return View("AtmIndex");
        }

        [HttpPost]
        [ActionName("Login")]
        public async Task<IActionResult> AtmLogin(UserModel reqModel)
        {
            var card = await _context.User.FirstOrDefaultAsync(x => x.CardNumber == reqModel.CardNumber && x.Pin == reqModel.Pin);

            if (card is null)
            {
                TempData["Message"] = "Card not recognized. Please try again!";
                TempData["IsSuccess"] = false;
            }
            return Json(card);
        }

        [ActionName("Create")]
        public IActionResult AtmCreate()
        {
            return View("AtmCreate");
        }

        [HttpPost]
        [ActionName("Save")]
        public async Task<IActionResult> AtmSave(UserModel reqModel)
        {
            object value = await _context.User.AddAsync(reqModel);
            int result = await _context.SaveChangesAsync();

            string message = result > 0 ? "Register Successful." : "Register Failed.";
          
            MessageModel model = new MessageModel(result > 0, message);
            return Json(model);
        }

        [ActionName("Transaction")]
        public async Task<IActionResult> AtmTransaction(int id)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            if (card is null)
            {
                TempData["Message"] = "User ID not found.";
                TempData["IsSuccess"] = false;
            }
            return View("AtmTransaction",card);
        }

        [ActionName("Balance")]
        public async Task<IActionResult> AtmBalance(int id)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
           
            return View("AtmBalance", card);
        }

        [ActionName("Deposit")]
        public async Task<IActionResult> AtmDeposit(int id)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return View("AtmDeposit",card);
        }

        [HttpPost]
        [ActionName("Deposit")]
        public async Task<IActionResult> AtmDeposit(int id, UserModel reqModel)
        {
            var card = await _context.User.FirstOrDefaultAsync(x => x.Id == id);
            if (card is null)
            {
                TempData["Message"] = "User ID not found.";
                TempData["IsSuccess"] = false;
                return Json(card);
            }

            if(reqModel.Balance <= 0)
            {
                MessageModel model1 = new MessageModel(false, "Please fill deposit amount");
                return Json(model1);
            }
            card.Balance += reqModel.Balance;
            _context.User.Entry(card).State = EntityState.Modified;
            int result = _context.SaveChanges();
            string message = result > 0 ? "Deposit Successful." : "Deposit Failed.";

            MessageModel model = new MessageModel(result > 0, message);
            return Json(model);
        }

        [ActionName("Withdraw")]
        public async Task<IActionResult> AtmWithdraw(int id)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return View("AtmWithdraw",card);
        }

        [HttpPost]
        [ActionName("Withdraw")]
        public async Task<IActionResult> AtmWithdraw(int id, UserModel reqModel)
        {
            var card = await _context.User.FirstOrDefaultAsync(x => x.Id == id);
            if (card is null)
            {
                TempData["Message"] = "User ID not found.";
                TempData["IsSuccess"] = false;
                return Json(card);
            }
            if (reqModel.Balance > card.Balance)
            {
                MessageModel model1 = new MessageModel(false, "Insufficient balance amount");
                return Json(model1);
            }

            card.Balance -= reqModel.Balance;
            _context.User.Entry(card).State = EntityState.Modified;
            int result = _context.SaveChanges();
            string message = result > 0 ? "Withdraw Successful." : "Withdraw Failed.";

            MessageModel model = new MessageModel(result > 0, message);
            return Json(model);
        }

        [ActionName("ChangePin")]
        public async Task<IActionResult> AtmChangePin(int id)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return View("AtmChangePin", card);
        }

        [HttpPost]
        [ActionName("ChangePin")]
        public async Task<IActionResult> AtmChangePin(int id , UserModel reqModel , int newpin, int confirmpin)
        {
            var card = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            if (card is null)
            {
                TempData["Message"] = "Card isn't recognized.";
                TempData["IsSuccess"] = false;
            }
            else
            {
                if (card.Pin == reqModel.Pin)
                {
                    if (newpin == confirmpin)
                    {
                        card.Pin = newpin;
                        _context.User.Entry(card).State = EntityState.Modified;
                        int result = _context.SaveChanges();
                        string message = result > 0 ? "Successful." : "Failed.";

                        MessageModel model1 = new MessageModel(result > 0, message);
                        return Json(model1);
                    }
                    else
                    {
                        MessageModel model1 = new MessageModel(false,"Not match PIN numbers");
                        return Json(model1);
                    }
                }
                MessageModel model = new MessageModel(false, "Current PIN number is invalid");
                return Json(model);
            }
            return Json(card);

        }
    }
}
