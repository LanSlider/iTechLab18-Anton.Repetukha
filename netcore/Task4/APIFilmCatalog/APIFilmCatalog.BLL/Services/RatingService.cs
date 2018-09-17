using System;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using AutoMapper;

namespace APIFilmCatalog.BLL.Services
{
    public class RatingService : IRatingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public RatingService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<RatingModel> GetRatingByUserIdAndFilmIdAsync(int filmId, int userId)
        {
            return _mapper.Map<Rating, RatingModel>(await _unitOfWork.Ratings.GetRatingByFilmIdAndUserIdAsync(filmId, userId)); 
        }

        public async Task<float> GetAverageRatingByFilmIdAsync(int id)
        {
            return await _unitOfWork.Ratings.GetAverageRatingByFilmIdAsync(id);
        }

        public async Task AddFilmRatingByUserIdAsync(RatingModel model)
        {
            _unitOfWork.Ratings.Add(_mapper.Map<RatingModel, Rating>(model));
            await _unitOfWork.SaveAsync();
        }

        public async Task UpdateFilmRatingByUserIdAsync(RatingModel model)
        {

            var entity = _mapper.Map<RatingModel, Rating>(model);

            await _unitOfWork.Ratings.UpdateAsync(entity);
            await _unitOfWork.SaveAsync();
        }

        public async Task<Boolean> CheckIsFilmAlreadyMarkedByUserAsync(int filmId, int userId)
        {
            var rating = await _unitOfWork.Ratings.GetRatingByFilmIdAndUserIdAsync(filmId, userId);
            if(rating != null)
            {
                return true;
            }
            return false;
        }
    }
}
