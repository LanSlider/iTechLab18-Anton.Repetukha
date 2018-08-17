using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.Models;

namespace APIFilmCatalog.Services
{
    public interface IUserService
    {
        Task<User> GetByEmailAsync(string email);
        Task<List<User>> GetUsersAsync();
        Task CreateAsync(User user);
        Task<Boolean> IsAlreadyExistAsync(string email);
        Task<Boolean> IsAlreadyExistAsync(string email, string password);
    }
}
