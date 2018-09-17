using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;

namespace APIFilmCatalog.BLL.Mapping
{
    public class MapperProfile : AutoMapper.Profile
    {
        public MapperProfile()
        {
            CreateMap<CommentModel, Comment>();
            CreateMap<Comment, CommentModel>();

            CreateMap<Rating, RatingModel>();
            CreateMap<RatingModel, Rating>();

            CreateMap<FilmModel, Film>();
            CreateMap<Film, FilmModel>();

            CreateMap<Film, FilmDetailsModel>()
                .ForMember(filmDetails => filmDetails.Images, opt => opt.MapFrom(film => film.Images));
            CreateMap<FilmDetailsModel, Film>()
              .ForMember(film => film.Images, opt => opt.MapFrom(filmDetails => filmDetails.Images));

            CreateMap<ImageModel, Image>();
            CreateMap<Image, ImageModel>();

            CreateMap<User, UserModel>();
            CreateMap<UserModel, User>();
            CreateMap<AuthModel, User>();
            CreateMap<RegisterModel, User>();
        }
    }
}
