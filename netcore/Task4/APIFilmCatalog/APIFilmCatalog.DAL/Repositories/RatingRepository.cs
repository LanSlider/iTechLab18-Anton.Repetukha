using System;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace APIFilmCatalog.DAL.Repositories
{
    public class RatingRepository : Repository<Rating>, IRatingRepository
    {
        private readonly AppDbContext _context;

        public RatingRepository(AppDbContext context)
            : base(context)
        {
            _context = context;
        }

        public async Task<float> GetAverageRatingByFilmIdAsync(int id)
        {
            return Convert.ToSingle( await _context.Ratings.Where(x => x.FilmId == id).AverageAsync<Rating>(y => y.Mark));
        }

        public async Task<Rating> GetRatingByFilmIdAndUserIdAsync(int filmId, int userId)
        {
            return await _context.Ratings.Include(x => x.User).FirstOrDefaultAsync(x => x.FilmId == filmId && x.UserId == userId);
        }
    }
}
