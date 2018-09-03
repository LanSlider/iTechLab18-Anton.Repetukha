using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IFilmRepository : IRepository<Film>
    {
        Task<ICollection<Film>> GetAllByCategoryAsync(string category);
        Task<Film> GetFilmById(int id);
    }
}
