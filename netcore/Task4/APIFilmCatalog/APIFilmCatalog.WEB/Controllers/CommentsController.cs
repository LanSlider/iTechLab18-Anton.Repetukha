using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;
using APIFilmCatalog.WEB.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace APIFilmCatalog.WEB.Controllers
{
    [Route("api/Comments")]
    public class CommentsController : Controller
    {
        private readonly ICommentService _service;
        private readonly IMapper _mapper;

        public CommentsController(ICommentService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("all/{id}")]
        public async Task<JsonResult> All(int filmId)
        {
            var comments = await _service.GetCommentsByIdFilmAsync(filmId);
            if (comments == null)
            {
                return Json(new ErrorJsonResult<Object>("Comments exception"));
            }

            return Json(new SuccessJsonResult<ICollection<CommentModelView>>(_mapper.Map<ICollection<CommentModel>, ICollection<CommentModelView>>(comments)));
        }

        [HttpPost]
        public async Task AddComment([FromBody]CommentModelView model)
        {
            if(ModelState.IsValid)
            {
                await _service.AddCommentAsync(_mapper.Map<CommentModelView, CommentModel>(model));
            }
        }

        //[Authorize]
        //[HttpPost]
        //public async Task<JsonResult> AddComment([FromBody] CommentModelView comment)
        //{
        //    if (ModelState.IsValid)
        //    {

        //    }
        //    //return Json(new SuccessJsonResult<FilmModelView>(_mapper.Map<FilmDetailsModel, FilmModelView>(filmDetails)));
        //}
    }
}