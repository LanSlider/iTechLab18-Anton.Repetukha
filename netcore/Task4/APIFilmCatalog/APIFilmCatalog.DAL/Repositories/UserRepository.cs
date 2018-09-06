using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;

namespace APIFilmCatalog.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetByEmailAndPasswordAsync(string email, string password = null)
        {
            return await _context.Users.FindAsync(email, password);
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _context.FindAsync<User>(id);
        }
    }
}
