using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;

namespace APICrud.Services
{
    public interface IDataService
    {
        Task<List<Film>> GetFilms();
        Task<Film> GetFilmById(int id);
        Task<Film> CreateFilm(Film film);
        Task<Film> DeleteFilm(int id);
        Task<Film> UpdateFilm(Film film);
    }
}
