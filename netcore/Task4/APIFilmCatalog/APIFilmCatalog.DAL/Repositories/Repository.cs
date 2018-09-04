using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace APIFilmCatalog.DAL.Repositories
{
    public abstract class Repository<T> : IRepository<T> where T: class
    {
        private readonly AppDbContext _context;

        public Repository(AppDbContext context)
        {
            _context = context;
        }

        public void Add(T item)
        {
            _context.Add(item);
        }

        public void Del(int id)
        {
            _context.Remove(GetByIdAsync(id));
        }

        public void Update(T item)
        {
            _context.Update(item);
        }
   
        public async Task<ICollection<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.FindAsync<T>(id);
        }

        public async Task<T> GetByIdAsync(string id)
        {
            return await _context.FindAsync<T>(id);
        }

        public async Task<T> GetByStringIdAsync(string id)
        {
            return await _context.FindAsync<T>(id);
        }
    }
}
