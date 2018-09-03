using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.WEB.Models;

namespace APIFilmCatalog.WEB.Profile
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
        }
    }
}
