using System;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Models;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface IRatingService
    {
        Task<RatingModel> GetRatingByUserIdAndFilmIdAsync(int filmId, int userId);
        Task<float> GetAverageRatingByFilmIdAsync(int id);
        Task<Boolean> CheckIsFilmAlreadyMarkedByUserAsync(int filmId, int userId);
        Task AddFilmRatingByUserIdAsync(RatingModel model);
        Task UpdateFilmRatingByUserIdAsync(RatingModel model);
    }
}
