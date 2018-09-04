using System;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Exceprions;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using AutoMapper;

namespace APIFilmCatalog.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task UpdateAsync(UserModel person)
        {
            _unitOfWork.Users.Update(_mapper.Map<UserModel, User>(person));
            await _unitOfWork.SaveAsync();
        }

        public async Task<Boolean> IsAlreadyEmailExistAsync(string email)
        {
            var result = await GetByEmailAsync(email);
            return result != null;
        }

        public async Task<Boolean> IsAlreadyUserNameExistAsync(string name)
        {
            var result = await GetByNameAsync(name);
            return result != null;
        }

        public async Task<Boolean> IsUserExistAsync(AuthModel user, string password)
        {
            var result = await _unitOfWork.SignInManager.UserManager.CheckPasswordAsync(_mapper.Map<AuthModel, User>(user), password);
            if (result)
            {
                return true;
            }
            return false;
        }

        public async Task<Boolean> LoginAsync(AuthModel user)
        {
            var result = await _unitOfWork.SignInManager.PasswordSignInAsync(user.UserName, user.Password, false, false);
            return result.Succeeded;
        }

        public async Task RegisterAsync(RegisterModel person)
        {
            var isEmailUnique = !await IsAlreadyEmailExistAsync(person.Email);
            var isNameUnique = !await IsAlreadyUserNameExistAsync(person.UserName);

            if (isEmailUnique && isEmailUnique)
            {
                var user = _mapper.Map<RegisterModel, User>(person);
                var result = await _unitOfWork.UserManager.CreateAsync(user, person.Password);
                if (result.Succeeded == false)
                {
                    throw new UserDataNotValidatedException("Name, email or password isn't validated");
                }
            }
            else
            {
                throw new UserNotExistsException("User with email" + "(" + person.Email + ")" + " or name" + "(" + person.UserName + ")" + " already exists");
            }
        }

        public async Task<UserModel> GetByEmailAsync(string email)
        {
            return _mapper.Map<User, UserModel>(await _unitOfWork.UserManager.FindByEmailAsync(email));
        }

        public async Task<UserModel> GetByNameAsync(string name)
        {
            return _mapper.Map<User, UserModel>(await _unitOfWork.UserManager.FindByNameAsync(name));
        }
    }
}
