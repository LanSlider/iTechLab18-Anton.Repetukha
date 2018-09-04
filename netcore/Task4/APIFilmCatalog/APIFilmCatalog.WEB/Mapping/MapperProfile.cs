using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;

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

            CreateMap<CommentModel, CommentModelView>();
            CreateMap<CommentModelView, CommentModel>();
        }
    }
}
