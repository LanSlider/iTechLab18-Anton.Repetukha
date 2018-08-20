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

        [HttpPost("register")]
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

        [HttpPost("login")]
        public async Task<ObjectResult> Login([FromBody] User user)
        {
            var isAlreadyExist = await _userService.IsAlreadyExistAsync(user.Email, user.Password);
            if (isAlreadyExist)
            {
                var token = await GetToken(user.Email);
                return Ok(new SuccessJsonResult<Object>(token));
            }

            return StatusCode(401, new ErrorJsonResult<Object>("User with this email and password isn't exist"));
        }

        private async Task<Object> GetToken(string userEmail)
        {
            var identity = await GetIdentity(userEmail);          

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
            
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Id.ToString()),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
            };

            ClaimsIdentity claimsIdentity =
            new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}