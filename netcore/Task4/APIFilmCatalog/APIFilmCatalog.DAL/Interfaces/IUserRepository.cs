using System.Threading.Tasks;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> GetByEmailAndPasswordAsync(string email, string password);
    }
}
