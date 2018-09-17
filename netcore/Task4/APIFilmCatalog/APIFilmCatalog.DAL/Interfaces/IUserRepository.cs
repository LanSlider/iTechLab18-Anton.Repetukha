using System.Threading.Tasks;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetByEmailAndPasswordAsync(string email, string password);
        Task<User> GetByIdAsync(int id);
    }
}
