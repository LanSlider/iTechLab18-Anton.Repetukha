using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.WEB.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIFilmCatalog.WEB.Controllers
{
    [Route("api/Comments")]
    public class CommentsController : Controller
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;

        public CommentsController(ICommentService commentService, IMapper mapper)
        {
            _commentService = commentService;
            _mapper = mapper;
        }

        //[HttpGet("{id}")]
        //public async Task<ObjectResult<ICollection<CommentViewModel>>> GetComments(int id)
        //{
        //    IList<CommentModel> comments = await _commentService.GetCommentsByFilmIdAsync(id);
        //    return Ok(_mapper.Map<IList<CommentModel>, IList<CommentViewModel>>(comments));
        //}

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