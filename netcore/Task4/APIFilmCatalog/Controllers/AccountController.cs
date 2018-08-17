using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using APIFilmCatalog.Exceptions;
using APIFilmCatalog.Models;
using APIFilmCatalog.Services;
using APIFilmCatalog.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace APIFilmCatalog.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task Register([FromBody] User user)
        {
            var isAlreadyExist = await _userService.IsAlreadyExistAsync(user.Email);
            if(!isAlreadyExist)
            {
                await _userService.CreateAsync(user);
            }      
        }

        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var users = await _userService.GetUsersAsync();
            return Json(new SuccessJsonResult<List<User>>(users));
        }

        [HttpGet]
        public async Task<JsonResult> Login([FromBody] User user)
        {
            var isAlreadyExist = await _userService.IsAlreadyExistAsync(user.Email);
            if (isAlreadyExist)
            {
                var token = await GetToken(user.Email, user.Password);
                return Json(new SuccessJsonResult<Object>(token));
            }
            return null;
        }

        private async Task<Object> GetToken(string userEmail, string userPassword)
        {
            var email = userEmail;
            var password = userPassword;

            var identity = await GetIdentity(email, password);

            // LogicalGuard.EnsureValuesIsNotNull(identity, nameof(identity));
            // EnsureValuesIsNotNull
            // {
            // if (value == null)
            // {
            //     throw new BussinessException("User with this email and password isn't exist");
            // }

            if (identity == null)
            {
                throw new BussinessException("User with this email and password isn't exist");
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };
            return response;
        }

        private async Task<ClaimsIdentity> GetIdentity(string email)
        {
            User user = await _userService.GetByEmailAsync(email);

            if (user == null)
            {
                throw new BussinessException("User with this email and password isn't exist");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Name),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
            };
            ClaimsIdentity claimsIdentity =
            new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;

        }
    }
}