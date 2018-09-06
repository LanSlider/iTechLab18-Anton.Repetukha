using System;
using System.Security.Claims;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace APIFilmCatalog.WEB.Controllers
{
    [Route("api/Ratings")]
    public class RatingsController : Controller
    {
        private readonly IRatingService _ratingService;
        private readonly IFilmService _filmService;
        private readonly IMapper _mapper;

        public RatingsController(IRatingService ratingService, IFilmService filmService,  IMapper mapper)
        {
            _ratingService = ratingService;
            _filmService = filmService;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet("film/{filmId}")]
        public async Task<JsonResult> GetFilmRating(int filmId)
        {
            var userId = Convert.ToInt32(this.User.FindFirstValue("id"));

            var rating = await _ratingService.GetRatingByUserIdAndFilmIdAsync(filmId, userId);
            if(rating == null)
            {
                return Json(new ErrorJsonResult<Object>("Ratings exception"));
            }

            return Json(new SuccessJsonResult<RatingModelView>(_mapper.Map<RatingModel, RatingModelView>(rating)));
        }

        [Authorize]
        [HttpPost]
        public async Task AddFilmRatingByUserId([FromBody]RatingModelView model)
        {
            if (ModelState.IsValid)
            {
                var userId = Convert.ToInt32(this.User.FindFirstValue("id"));
                var rating = await _ratingService.GetRatingByUserIdAndFilmIdAsync(model.FilmId, userId);
                if(rating == null)
                {
                    var ratingModel = _mapper.Map<RatingModelView, RatingModel>(model);
                    ratingModel.UserId = userId;
                    await _ratingService.AddFilmRatingByUserIdAsync(ratingModel);
                }
                else
                {
                    rating.Mark = model.Mark;
                    await _ratingService.UpdateFilmRatingByUserIdAsync(rating);
                }

                await _filmService.UpdateFilmRatingAsync(model.FilmId);
            }
        }

        //[Authorize]
        //[HttpGet("check/{filmId}")]
        //public async Task<JsonResult> CheckIsFilmMarkedByUser(int filmId)
        //{
        //    var userId = Convert.ToInt32(this.User.FindFirst(ClaimTypes.NameIdentifier).Value);

        //    var result = await _ratingService.CheckIsFilmAlreadyMarkedByUserAsync(filmId, userId);
        //    if (result == false)
        //    {
        //        return Json(new ErrorJsonResult<Object>("Ratings exception"));
        //    }

        //    return Json(new SuccessJsonResult<Boolean>(result));
        //}
    }
}