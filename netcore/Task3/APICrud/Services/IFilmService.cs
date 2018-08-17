using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;

namespace APICrud.Services
{
    public interface IFilmService
    {
        Task<List<Film>> GetAll();
        Task<Film> GetById(int id);
        Task Create(Film film);
        Task Delete(int id);
        Task Update(Film film);
    }
}
