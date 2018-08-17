using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;

namespace APICrud.Services
{
    public interface IFilmService
    {
        Task<List<Film>> GetAllAsync();
        Task<Film> GetByIdAsync(int id);
        Task CreateAsync(Film film);
        Task DeleteAsync(int id);
        Task UpdateAsync(Film film);
    }
}
