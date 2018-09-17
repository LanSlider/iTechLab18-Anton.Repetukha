using System;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Models;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface IUserService
    {
        Task<UserModel> GetByEmailAsync(string email);
        Task<UserModel> GetByNameAsync(string name);
        Task<UserModel> GetByUserIdAsync(int id);
        //Task UpdateAsync(UserModel user);
        Task<Boolean> IsAlreadyEmailExistAsync(string email);
        Task<Boolean> IsAlreadyUserNameExistAsync(string name);
        Task<Boolean> IsUserExistAsync(AuthModel user, string password);
        Task<Boolean> LoginAsync(AuthModel person);
        Task RegisterAsync(RegisterModel person);
    }
}