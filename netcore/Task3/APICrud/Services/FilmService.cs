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
    public class FilmService : IFilmService
    {
        private readonly FilmContext _db;

        public FilmService(FilmContext context)
        {
            _db = context;
        }

        public async Task Create(Film film)
        {
            _db.Films.Add(film);
            await _db.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            if (id < 0)
            {
                throw new ArgumentException("ID is invalid");
            }
            var film = await GetFirstOrDefaultFilmAsync(id);
            if (film == null)
            {
                throw new BussinessException("Film of this ID isn't exist");
            }
            _db.Films.Remove(film);
            await _db.SaveChangesAsync();
        }

        public async Task<Film> GetById(int id)
        {
            if(id < 0)
            {
                throw new ArgumentException("ID is invalid"); 
            }
            return await GetFirstOrDefaultFilmAsync(id);
        }

        public async Task<List<Film>> GetAll()
        {
            return await _db.Films.ToListAsync();
        }

        public async Task Update(Film film)
        {
            _db.Films.Update(film);
            await _db.SaveChangesAsync();
        }

        private async Task<Film> GetFirstOrDefaultFilmAsync(int id)
        {
            return await _db.Films.FindAsync(id);
        }
    }
}
