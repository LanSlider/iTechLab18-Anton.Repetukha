using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;
using APICrud.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APICrud.Controllers
{
    [Route("api/[controller]")]
    public class CRUDController : Controller
    {
        private readonly IDataService _dataService;

        public CRUDController(IDataService dataService)
        {
            _dataService = dataService;
        }

        [HttpGet]
        public async Task<List<Film>> GetAll()
        {
            return await _dataService.GetFilms();
        }

        [HttpGet("{id}")]
        public async Task<Film> Get(int id)
        {
            return await _dataService.GetFilmById(id);
        }

        [HttpPost]
        public async Task<Film> Post([FromBody] Film film)
        {
            return await _dataService.CreateFilm(film);
        }

        [HttpPut]
        public async Task<Film> Put([FromBody] Film film)
        {
            return await _dataService.UpdateFilm(film);
        }

        [HttpDelete("{id}")]
        public async Task<Film> Delete(int id)
        {
            return await _dataService.DeleteFilm(id);
        }
    }
}