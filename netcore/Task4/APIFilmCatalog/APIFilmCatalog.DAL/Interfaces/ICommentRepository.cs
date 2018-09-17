using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface ICommentRepository : IRepository<Comment>
    {
        Task<IList<Comment>> GetCommentsByFilmIdAsync(int id);
    }
}
