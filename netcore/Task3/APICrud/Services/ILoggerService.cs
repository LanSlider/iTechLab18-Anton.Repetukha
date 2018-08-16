using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Exceptions;
using Microsoft.AspNetCore.Mvc.Filters;

namespace APICrud.Services
{
    public interface ILoggerService
    {
        void Info(string logMessage);
        void Error(BussinessException exception);
        void Error(Exception exception);
    }
}