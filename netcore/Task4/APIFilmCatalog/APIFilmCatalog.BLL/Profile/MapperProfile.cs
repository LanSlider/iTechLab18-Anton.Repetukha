using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;
using System.Collections.Generic;

namespace APIFilmCatalog.BLL.Profile
{
    public class MapperProfile : AutoMapper.Profile
    {
        public MapperProfile()
        {
            CreateMap<CommentModel, Comment>();
            CreateMap<Comment, CommentModel>();

            //CreateMap<UpdateRatingDTO, RatingEntity>();
            //CreateMap<RatingEntity, UpdateRatingDTO>();

            CreateMap<FilmModel, Film>();
            CreateMap<Film, FilmModel>();

            CreateMap<Film, FilmDetailsModel>()
                .ForMember(filmDetails => filmDetails.Images, opt => opt.MapFrom(film => film.Images));
            CreateMap<FilmDetailsModel, Film>()
              .ForMember(film => film.Images, opt => opt.MapFrom(filmDetails => filmDetails.Images));

            CreateMap<ImageModel, Image>();
            CreateMap<Image, ImageModel>();

            CreateMap<User, User>();
            CreateMap<User, User>();
            CreateMap<AuthModel, User>();
            CreateMap<RegisterModel, User>();

            //CreateMap<RegistrationDTO, UserEntity>();
        }
    }
}
