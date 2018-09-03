using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;
using AutoMapper;
using FilmCatalog.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace APIFilmCatalog.WEB.Controllers
{
    [Route("api/Films")]
    public class FilmsController : Controller
    {
        private readonly IFilmService _service;
        private readonly IMapper _mapper;

        public FilmsController(IFilmService filmService, IMapper mapper)
        {
            _service = filmService;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<JsonResult> All()
        {
            var films = await _service.GetAllAsync();
            if (films == null)
            {
                return Json(new ErrorJsonResult<Object>("Films exception"));
            }

            return Json(new SuccessJsonResult<ICollection<FilmModelView>>(_mapper.Map<ICollection<FilmModel>, ICollection<FilmModelView>>(films)));
        }

        [HttpGet("all/{category}")]
        public async Task<JsonResult> AllFromCategory(string category)
        {
            var films = await _service.GetAllFromCategoryAsync(category);
            if (films == null)
            {
                return Json(new ErrorJsonResult<Object>("Films exception"));
            }

            return Json(new SuccessJsonResult<ICollection<FilmModelView>>(_mapper.Map<ICollection<FilmModel>, ICollection<FilmModelView>>(films)));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Details(int id)
        {
            var filmDetails = await _service.GetFilmDetailsAsync(id);
            if (filmDetails == null)
            {
                return Json(new ErrorJsonResult<Object>("Film exception"));
            }

            return Json(new SuccessJsonResult<FilmDetailsModelView>(_mapper.Map<FilmDetailsModel, FilmDetailsModelView>(filmDetails)));
        }
    }
}