using System;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class UserNotExistsException : Exception
    {
        public UserNotExistsException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
