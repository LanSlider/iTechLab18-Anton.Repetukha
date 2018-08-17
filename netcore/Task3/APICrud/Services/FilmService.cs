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

        public async Task CreateAsync(Film film)
        {
            _db.Films.Add(film);
            await _db.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
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

        public async Task<Film> GetByIdAsync(int id)
        {
            if(id < 0)
            {
                throw new ArgumentException("ID is invalid"); 
            }
            return await GetFirstOrDefaultFilmAsync(id);
        }

        public async Task<List<Film>> GetAllAsync()
        {
            return await _db.Films.ToListAsync();
        }

        public async Task UpdateAsync(Film film)
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
