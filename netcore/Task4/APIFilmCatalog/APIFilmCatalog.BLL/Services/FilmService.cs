using System.Collections.Generic;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Exceprions;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using AutoMapper;

namespace APIFilmCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public FilmService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ICollection<FilmModel>> GetAllAsync()
        {
            return _mapper.Map<ICollection<Film>, ICollection<FilmModel>>(await _unitOfWork.Films.GetAllAsync());
        }

        public async Task<ICollection<FilmModel>> GetAllFromCategoryAsync(string category)
        {
            return _mapper.Map<ICollection<Film>, ICollection<FilmModel>>(await _unitOfWork.Films.GetAllByCategoryAsync(category));
        }

        public async Task<FilmDetailsModel> GetFilmDetailsAsync(int id)
        {
            var film = await _unitOfWork.Films.GetFilmById(id);
            if (film == null)
            {
                throw new FilmNotExistsException("Film not exists, id: " + id);
            }
            return _mapper.Map<Film, FilmDetailsModel>(film);
        }

        public async Task UpdateFilmRatingAsync(int id)
        {
            var film = await _unitOfWork.Films.GetByIdAsync(id);
            if(film == null)
            {
                throw new FilmNotExistsException("Film not exists, id: " + id);               
            }
            film.Rating = await _unitOfWork.Ratings.GetAverageRatingByFilmIdAsync(id);

            await _unitOfWork.Films.UpdateAsync(film);
            await _unitOfWork.SaveAsync();
        }
    }
}
