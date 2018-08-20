﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using APIFilmCatalog.Contexts;
using APIFilmCatalog.Exceptions;
using APIFilmCatalog.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace APIFilmCatalog.Services
{
    public class UserService : IUserService
    {
        private readonly UserContext _db;

        public UserService(UserContext context)
        {
            _db = context;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<Boolean> IsAlreadyExistAsync(string email)
        {
            var result = await GetFirstOrDefaultUserAsync(email);
            if (result == null)
            {
                return false;
            }
            return true;
        }

        public async Task<Boolean> IsAlreadyExistAsync(string email, string password)
        {
            var result = await GetFirstOrDefaultUserAsync(email, password);
            if (result == null)
            {
                return false;
            }
            return true;
        }

        public async Task CreateAsync(User person)
        {
            _db.Add(person);
            await _db.SaveChangesAsync();
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            return await GetFirstOrDefaultUserAsync(email);
        }

        private async Task<User> GetFirstOrDefaultUserAsync(string email, string password = null)
        {
            if(password == null)
            {
                return await _db.Users.FirstOrDefaultAsync(x => x.Email == email);
            }
            return await _db.Users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
        }
    }
}
