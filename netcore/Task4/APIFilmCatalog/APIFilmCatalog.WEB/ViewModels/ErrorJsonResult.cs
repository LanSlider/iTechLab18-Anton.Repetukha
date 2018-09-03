using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmCatalog.ViewModels
{
    public class ErrorJsonResult<T> : BaseJsonResult<T>
    {
        public ErrorJsonResult(string errorMessage)
        {
            this.ErrorMessage = errorMessage;
        }
    }
}