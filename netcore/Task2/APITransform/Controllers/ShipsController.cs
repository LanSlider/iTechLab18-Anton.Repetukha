using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Exeptions;
using APITransform.Models;
using APITransform.Services;
using APITransform.ViewModels;
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
        private readonly IShipIndexService _shipIndexService;
        private readonly IMapper _mapper;

        public ShipsController(IShipDataService shipDataService, IMapper mapper, IShipIndexService shipIndexService)
        {
            _shipDataService = shipDataService;
            _shipIndexService = shipIndexService;
            _mapper = mapper;
        }

        [HttpGet]
        public JsonResult Get()
        {
            try
            {
                var starshipsData = _shipDataService.GetData();
                var data = _mapper.Map<ShipData, Starships>(starshipsData);
                data.Results = _shipIndexService.AddIndexToList(data.Results);

                return Json(new SuccessJsonResult<Starships>(data));
            }
            catch (BussinessException ex)
            {
                return Json(new ErrorJsonResult<Starships>(ex.UserFriendlyMessage));
            }
        }

        [HttpGet("async")]
        public async Task<JsonResult> GetAsync()
        {
            try
            {
                var starshipsData = await _shipDataService.GetDataAsync();
                var data = _mapper.Map<ShipData, Starships>(starshipsData);
                data.Results = _shipIndexService.AddIndexToList(data.Results);

                return Json(new SuccessJsonResult<Starships>(data));
            }
            catch (BussinessException ex)
            {
                return Json(new ErrorJsonResult<Starships>(ex.UserFriendlyMessage));
            }
        }

        [HttpGet("async/all")]
        public async Task<JsonResult> GetAsyncAll()
        {
            try
            {
                var starshipsData = await _shipDataService.GetAllDataAsync();
                var data = _mapper.Map<ShipData, Starships>(starshipsData);
                data.Results = _shipIndexService.AddIndexToList(data.Results);

                return Json(new SuccessJsonResult<Starships>(data));
            }
            catch (BussinessException ex)
            {
                return Json(new ErrorJsonResult<Starships>(ex.UserFriendlyMessage));
            }
        }
    }
}
