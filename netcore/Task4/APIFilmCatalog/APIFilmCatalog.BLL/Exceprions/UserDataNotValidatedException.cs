using System;
using System.Collections.Generic;
using System.Text;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class UserDataNotValidatedException : Exception
    {
        public UserDataNotValidatedException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
