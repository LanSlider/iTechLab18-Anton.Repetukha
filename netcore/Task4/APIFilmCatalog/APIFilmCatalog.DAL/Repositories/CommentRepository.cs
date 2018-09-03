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
    public class CommentRepository : Repository<Comment>, ICommentRepository
    {
        private readonly AppDbContext _context;

        public CommentRepository(AppDbContext context)
            : base(context)
        {
            _context = context;
        }

        public async Task<IList<Comment>> GetCommentsByFilmIdAsync(int id)
        {
            return await _context.Comments.Include(x => x.UserId).Where(y => y.FilmId == id).ToListAsync();
        }
    }
}
