using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Contexts;
using APICrud.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace APICrud.Services
{
    public class DataService : IDataService
    {
        private readonly IMapper _mapper;
        private readonly FilmContext _db;

        public DataService(IMapper mapper, FilmContext context)
        {
            _mapper = mapper;
            _db = context;

            if(!_db.Films.Any())
            {
                _db.Films.Add(new Film { Name = "SomeFilm", Country = "Belarussian", Producer = "Tom", Year = 1964 });
                _db.Films.Add(new Film { Name = "SomeFilm2", Country = "Russian", Producer = "Alex", Year = 2000 });
                _db.SaveChanges();
            }
        }

        public async Task<Film> CreateFilm(Film film)
        {
            if(film == null)
            {
                return null;
            }
            _db.Films.Add(film);
            await _db.SaveChangesAsync();
            return film;
        }

        public async Task<Film> DeleteFilm(int id)
        {
            if(id < 0)
            {
                return null;
            }
            Film film = _db.Films.FirstOrDefault(x => x.Id == id);
            if (film == null)
            {
                return null;
            }
            _db.Films.Remove(film);
            await _db.SaveChangesAsync();
            return film;
        }

        public async Task<Film> GetFilmById(int id)
        {
            if(id < 0)
            {
                return null;
            }
            return await _db.Films.FindAsync(id);

        }

        public async Task<List<Film>> GetFilms()
        {
            return await _db.Films.ToListAsync();
        }

        public async Task<Film> UpdateFilm(Film film)
        {
            if(film == null)
            {
                return null;
            }
            _db.Films.Update(film);
            await _db.SaveChangesAsync();
            return film;
        }
    }
}
