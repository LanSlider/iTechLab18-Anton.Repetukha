using System;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class UserDataNotValidatedException : Exception
    {
        public UserDataNotValidatedException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
