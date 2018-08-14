using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APISum.Models;
using Microsoft.AspNetCore.Mvc;

namespace APISum.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public IActionResult Sum(ValueModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(new ResultModel { A = (int)model.Value1, B = (int)model.Value2, Sum = (int)(model.Value1 + model.Value2) });        
        }
    }
}
