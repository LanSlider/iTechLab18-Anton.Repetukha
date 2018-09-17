using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Models;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface ICommentService
    {
        Task AddCommentAsync(CommentModel comment);
        Task<ICollection<CommentModel>> GetCommentsByIdFilmAsync(int id);
    }
}
