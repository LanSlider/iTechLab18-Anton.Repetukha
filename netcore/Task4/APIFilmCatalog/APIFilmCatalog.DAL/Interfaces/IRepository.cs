using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        void Add(T item);
        void Del(int id);
        void Update(T item);
        Task<T> GetByIdAsync(int id);
        Task<T> GetByIdAsync(string id);
        Task<ICollection<T>> GetAllAsync();
        Task<T> GetByStringIdAsync(string id);
    }
}
