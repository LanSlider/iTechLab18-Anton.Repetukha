using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;
using APITransform.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace APITransform.Controllers
{

    [Route("api/[controller]")]
    public class ShipsController : Controller
    {
        private readonly IShipDataService _shipDataService;
        private readonly IMapper _mapper;

        public ShipsController(IShipDataService shipDataService, IMapper mapper)
        {
            _shipDataService = shipDataService;
            _mapper = mapper;
        }

        [HttpGet]
        public ObjectResult Get()
        {
            Starships starshipsList = _shipDataService.GetData();
            return Ok(starshipsList);
        }

        [HttpGet("async")]
        public async Task<ObjectResult> GetAsync()
        {
            Starships starshipsList = await _shipDataService.GetDataAsync();
            return Ok(starshipsList);
        }

        [HttpGet("async/all")]
        public async Task<ObjectResult> GetAsyncAll()
        {
            ShipData shipDataNext = await _shipDataService.GetAllDataAsync();
            Starships starshipsList = _mapper.Map<ShipData, Starships>(shipDataNext);
            return Ok(starshipsList);
        }
    }
}
