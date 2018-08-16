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
        private readonly IDataService _dataService;
        private readonly ILoggerService _loggerService;

        public CRUDController(IDataService dataService, ILoggerService loggerService)
        {
            _dataService = dataService;
            _loggerService = loggerService;
        }

        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var filmList = await _dataService.GetFilms();
            return Json(new SuccessJsonResult<List<Film>>(filmList));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get(int id)
        {
            var film = await _dataService.GetFilmById(id);
            return Json(new SuccessJsonResult<Film>(film));
        }

        [HttpPost]
        public async Task<JsonResult> Post([FromBody] Film film)
        {
            var createdFilm = await _dataService.CreateFilm(film);
            return Json(new SuccessJsonResult<Film>(createdFilm));
        }

        [HttpPut]
        public async Task<JsonResult> Put([FromBody] Film film)
        {
            var updatedFilm = await _dataService.UpdateFilm(film);
            return Json(new SuccessJsonResult<Film>(updatedFilm));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            var deletedFilm = await _dataService.DeleteFilm(id);
            return Json(new SuccessJsonResult<Film>(deletedFilm));
        }
    }
}