using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;

namespace APIFilmCatalog.DAL.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
            : base(context)
        {
            _context = context;
        }

        public async Task<User> GetByEmailAndPasswordAsync(string email, string password = null)
        {
            return await _context.Users.FindAsync(email, password);
        }
    }
}
