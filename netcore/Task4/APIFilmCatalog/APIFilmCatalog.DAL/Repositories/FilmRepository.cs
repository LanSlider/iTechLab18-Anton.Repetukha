using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace APIFilmCatalog.DAL.Repositories
{
    public class FilmRepository : Repository<Film>, IFilmRepository
    {
        private readonly AppDbContext _context;

        public FilmRepository(AppDbContext context)
            : base(context)
        {
            _context = context;
        }

        public async Task<ICollection<Film>> GetAllByCategoryAsync(string category)
        {
            return await _context.Films.Where(y => y.Category == category).ToListAsync();
        }

        public async Task<Film> GetFilmById(int id)
        {
            return await _context.Films.Include(x => x.Images).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
