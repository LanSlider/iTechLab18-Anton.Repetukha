using APIFilmCatalog.BLL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface ICommentService
    {
        Task AddCommentAsync(CommentModel comment);
        Task<ICollection<CommentModel>> GetCommentsByIdFilmAsync(int id);
    }
}
