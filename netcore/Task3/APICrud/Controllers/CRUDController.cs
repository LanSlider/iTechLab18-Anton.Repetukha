using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using APICrud.Exceptions;
using APICrud.Filters;
using APICrud.Models;
using APICrud.Services;
using APITransform.ViewModels;
using log4net;
using Microsoft.AspNetCore.Mvc;

namespace APICrud.Controllers
{
    [ServiceFilter(typeof(LogActionFilter))]
    [Route("api/[controller]")]
    public class CRUDController : Controller
    {
        private readonly IFilmService _filmService;
        private readonly ILoggerService _loggerService;

        public CRUDController(IFilmService filmService, ILoggerService loggerService)
        {
            _filmService = filmService;
            _loggerService = loggerService;
        }

        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var filmList = await _filmService.GetAllAsync();
            return Json(new SuccessJsonResult<List<Film>>(filmList));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get(int id)
        {
            var film = await _filmService.GetByIdAsync(id);
            return Json(new SuccessJsonResult<Film>(film));
        }

        [HttpPost]
        public async Task Post([FromBody] Film film)
        {
             await _filmService.CreateAsync(film);           
        }

        [HttpPut]
        public async Task Put([FromBody] Film film)
        {
             await _filmService.UpdateAsync(film);
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _filmService.DeleteAsync(id);
        }
    }
}