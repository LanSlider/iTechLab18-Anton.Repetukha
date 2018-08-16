using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Contexts;
using APICrud.Exceptions;
using APICrud.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace APICrud.Services
{
    public class DataService : IDataService
    {
        private readonly FilmContext _db;

        public DataService(FilmContext context)
        {
            _db = context;
        }

        public async Task<Film> CreateFilm(Film film)
        {
            _db.Films.Add(film);
            await _db.SaveChangesAsync();
            return film;
        }

        public async Task<Film> DeleteFilm(int id)
        {
            if(id < 0)
            {
                throw new BussinessException("ID is invalid");
            }
            var film = await GetFirstOrDefaultFilm(id);
            if (film == null)
            {
                throw new BussinessException("Film of this ID isn't exist");
            }
            _db.Films.Remove(film);
            await _db.SaveChangesAsync();
            return film;
        }

        public async Task<Film> GetFilmById(int id)
        {
            if(id < 0)
            {
                throw new BussinessException("ID is invalid");
            }
            var film = await GetFirstOrDefaultFilm(id);
            if(film == null)
            {
                throw new BussinessException("Film of this ID isn't exist");
            }
            return await _db.Films.FindAsync(id);

        }

        public async Task<List<Film>> GetFilms()
        {
            return await _db.Films.ToListAsync();
        }

        public async Task<Film> UpdateFilm(Film film)
        {
            _db.Films.Update(film);
            await _db.SaveChangesAsync();
            return film;
        }

        private async Task<Film> GetFirstOrDefaultFilm(int id)
        {
            return await _db.Films.FindAsync(id);
        }
    }
}
