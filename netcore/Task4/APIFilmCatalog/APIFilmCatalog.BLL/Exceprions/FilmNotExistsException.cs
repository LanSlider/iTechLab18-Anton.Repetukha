using System;
using System.Collections.Generic;
using System.Text;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class FilmNotExistsException : Exception
    {
        public FilmNotExistsException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
