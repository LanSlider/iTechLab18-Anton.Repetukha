using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;
using APITransform.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace APITransform.Controllers
{

    [Route("api/[controller]")]
    public class ShipsController : Controller
    {
        private readonly IShipDataService _shipDataService;

        public ShipsController(IShipDataService shipDataService)
        {
            this._shipDataService = shipDataService;   
        }

        [HttpGet]
        public ObjectResult Get()
        {    
            return Ok(_shipDataService.GetData());
        }

        [HttpGet("async")]
        public async Task<ObjectResult> GetAsync()
        {
            return Ok(await _shipDataService.GetDataAsync());
        }

        [HttpGet("async/all")]
        public async Task<ObjectResult> GetAsyncAll()
        {
            return Ok(await _shipDataService.GetAllDataAsync());
        }
    }
}
