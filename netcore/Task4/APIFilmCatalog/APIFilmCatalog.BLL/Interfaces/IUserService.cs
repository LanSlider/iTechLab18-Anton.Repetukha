﻿using APIFilmCatalog.BLL.Models;
using System;
using System.Threading.Tasks;

namespace APIFilmCatalog.BLL.Interfaces
{
    public interface IUserService
    {
        Task<UserModel> GetByEmailAsync(string email);
        Task<UserModel> GetByNameAsync(string name);
        Task UpdateAsync(UserModel user);
        Task<Boolean> IsAlreadyEmailExistAsync(string email);
        Task<Boolean> IsAlreadyUserNameExistAsync(string name);
        Task<Boolean> IsUserExistAsync(AuthModel user, string password);
        Task<Boolean> LoginAsync(AuthModel person);
        Task RegisterAsync(RegisterModel person);
    }
}