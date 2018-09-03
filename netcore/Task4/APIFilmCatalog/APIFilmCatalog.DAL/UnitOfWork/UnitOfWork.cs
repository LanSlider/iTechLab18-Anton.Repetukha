using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.DAL.Context;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace APIFilmCatalog.DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private bool _disposed = false;

        public UnitOfWork(
            AppDbContext context, 
            IUserRepository users, 
            IFilmRepository films, 
            ICommentRepository comments, 
            IRatingRepository ratings,
            UserManager<User> userManager,
            SignInManager<User> signInManager
        )
        {
            UserManager = userManager;
            SignInManager = signInManager;
            Context = context;
            Users = users;
            Films = films;
            Comments = comments;
            Ratings = ratings;
        }

        public AppDbContext Context { get; }
        public IFilmRepository Films { get; private set; }
        public ICommentRepository Comments { get; private set; }
        public IRatingRepository Ratings { get; private set; }
        public IUserRepository Users { get; private set; }
        public UserManager<User> UserManager { get; private set; }
        public SignInManager<User> SignInManager { get; private set; }

        public void Save() => Context.SaveChanges();
        public async Task SaveAsync() => await Context.SaveChangesAsync();

        public void Dispose()
        {
            if(!_disposed)
            {
                Context.Dispose();
                _disposed = true;
            }
            GC.SuppressFinalize(this);
        }
    }
}
