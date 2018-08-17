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
            new User { Id = 1, Name = "Administrator", Email = "admin.filmcatalog@gmail.com", Password = "admin", Role = "Admin"},
            new User { Id = 2, Name = "Moderator", Email = "moder.filmcatalog@gmail.com", Password = "moder", Role = "Moder"}
        };
    }
}
