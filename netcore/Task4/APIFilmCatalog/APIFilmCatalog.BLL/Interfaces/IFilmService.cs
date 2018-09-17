using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Models;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        Task UpdateFilmRatingAsync(int id);
        Task<ICollection<FilmModel>> GetAllAsync();
        Task<ICollection<FilmModel>> GetAllFromCategoryAsync(string category);
        Task<FilmDetailsModel> GetFilmDetailsAsync(int id);
    }
}
