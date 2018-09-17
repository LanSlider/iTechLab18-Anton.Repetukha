using System;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class FilmNotExistsException : Exception
    {
        public FilmNotExistsException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
