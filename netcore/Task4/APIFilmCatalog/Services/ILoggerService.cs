using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.Exceptions;
using Microsoft.AspNetCore.Mvc.Filters;

namespace APIFilmCatalog.Services
{
    public interface ILoggerService
    {
        void Error(BussinessException exception);
        void Error(Exception exception);
    }
}