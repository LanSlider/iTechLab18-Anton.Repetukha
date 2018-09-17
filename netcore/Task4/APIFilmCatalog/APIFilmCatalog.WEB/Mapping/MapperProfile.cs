using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;
using APIFilmCatalog.WEB.ViewModels;

namespace APIFilmCatalog.WEB.Mapping
{
    public class MapperProfile : AutoMapper.Profile
    {
        public MapperProfile()
        {
            CreateMap<RegisterViewModel, RegisterModel>();
            CreateMap<AuthViewModel, AuthModel>();

            CreateMap<FilmDetailsModel, FilmDetailsModelView>();
            CreateMap<FilmDetailsModelView, FilmDetailsModel>();

            CreateMap<FilmModel, FilmModelView>();
            CreateMap<FilmModelView, FilmModel>();

            CreateMap<RatingModel, RatingModelView>();
            CreateMap<RatingModelView, RatingModel>();

            CreateMap<CommentModel, CommentModelView>()
                .ForMember(c => c.UserName, c => c.MapFrom(m => m.User.UserName));
            CreateMap<CommentModelView, CommentModel>();
        }
    }
}
