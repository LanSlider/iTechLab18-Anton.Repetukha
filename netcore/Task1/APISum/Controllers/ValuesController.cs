using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APISum.Models;
using APISum.Services;
using Microsoft.AspNetCore.Mvc;

namespace APISum.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly ISumValuesService _sumValuesService;

        public ValuesController(ISumValuesService sumValuesService)
        {
            _sumValuesService = sumValuesService;
        }

        [HttpGet]
        public IActionResult Sum(ValueViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok(_sumValuesService.SumValues(model.Value1.Value, model.Value2.Value));        
        }
    }
}
