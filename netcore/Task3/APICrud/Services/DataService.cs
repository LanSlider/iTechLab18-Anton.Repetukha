using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;

namespace APICrud.Services
{
    public class DataService : IDataService
    {
        public Task<Film> CreateFilm(Film film)
        {
            throw new NotImplementedException();
        }

        public Task<Film> DeleteFilm(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Film> GetFilmById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Film>> GetFilms()
        {
            throw new NotImplementedException();
        }

        public Task<Film> UpdateFilm(Film film)
        {
            throw new NotImplementedException();
        }
    }
}
