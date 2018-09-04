using System;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using Microsoft.AspNetCore.Identity;

namespace APIFilmCatalog.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        AppDbContext Context { get; }
        IFilmRepository Films { get; }
        ICommentRepository Comments { get;}
        IRatingRepository Ratings { get; }
        IUserRepository Users { get; }
        UserManager<User> UserManager { get; }
        SignInManager<User> SignInManager { get; }

        void Save();
        Task SaveAsync();
    }
}