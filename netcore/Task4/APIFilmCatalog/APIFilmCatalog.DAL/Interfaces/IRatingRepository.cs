using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IRatingRepository : IRepository<Rating>
    {
        Task<float> GetAverageRatingByFilmIdAsync(int id);
        Task<Rating> GetRatingByFilmIdAndUserIdAsync(int filmId, int userId);
    }
}
