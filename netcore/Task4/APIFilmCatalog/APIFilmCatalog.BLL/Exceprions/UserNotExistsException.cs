using System;
using System.Collections.Generic;
using System.Text;

namespace APIFilmCatalog.BLL.Exceprions
{
    public class UserNotExistsException : Exception
    {
        public UserNotExistsException(string errorMessage)
            : base(errorMessage)
        { }
    }
}
