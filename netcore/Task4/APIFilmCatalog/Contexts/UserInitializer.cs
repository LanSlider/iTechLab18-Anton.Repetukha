using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.Models;

namespace APIFilmCatalog.Contexts
{
    public class UserInitializer
    {
        private readonly UserContext _context;

        public UserInitializer(UserContext context)
        {
            _context = context;
        }

        public async Task Seed()
        {
            if(!_context.Users.Any())
            {
                _context.AddRange(users);
                await _context.SaveChangesAsync();
            }
        }

         List<User> users = new List<User>
        {
            new User { Name = "Administrator", Email = "admin@gmail.com", Password = "admin", Role = "admin"},
            new User { Name = "Moderator", Email = "moder@gmail.com", Password = "moder", Role = "moder"}
        };
    }
}
