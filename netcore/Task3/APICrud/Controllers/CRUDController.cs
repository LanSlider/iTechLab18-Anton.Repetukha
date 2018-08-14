using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APICrud.Controllers
{
    [Route("api/[controller]")]
    public class CRUDController : Controller
    {
        [HttpGet]
        public IEnumerable<Film> GetAll()
        {
            return new Film[] { "value1", "value2" };
        }

        
    }
}