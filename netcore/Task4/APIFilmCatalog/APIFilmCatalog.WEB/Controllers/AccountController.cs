using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;
using APIFilmCatalog.WEB.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace APIFilmCatalog.WEB.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public AccountController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task Register([FromBody] RegisterViewModel user)
        {
             await _userService.RegisterAsync(_mapper.Map<RegisterViewModel, RegisterModel>(user));
        }

        [HttpPost("login")]
        public async Task<ObjectResult> Login([FromBody] AuthViewModel person)
        {
            var isUserExist = await _userService.LoginAsync(_mapper.Map<AuthViewModel, AuthModel>(person));
            if(isUserExist)
            {
                var token = await GetToken(person.UserName);
                return Ok(new SuccessJsonResult<Object>(token));
            }

            return StatusCode(401, new ErrorJsonResult<Object>("User with this email and password isn't exist"));
        }

        private async Task<Object> GetToken(string userName)
        {
            var identity = await GetIdentity(userName);

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
                //userID = identity.Name
            };
            return response;
        }

        private async Task<ClaimsIdentity> GetIdentity(string name)
        {
            var user = await _userService.GetByNameAsync(name);

            var claims = new List<Claim>
            {
                new Claim("id", user.Id.ToString()),
                new Claim("name", user.UserName ?? "User"),
                new Claim("role", user.Email)
            };

            ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;

        }
    }
}