using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.Exceptions;
using log4net;
using Microsoft.AspNetCore.Mvc.Filters;

namespace APIFilmCatalog.Services
{
    public class LoggerService : ILoggerService
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(LoggerService));

        public void Error(BussinessException exception)
        {
            _log.Error(exception.UserFriendlyMessage, exception);
        }

        public void Error(Exception exception)
        {
            _log.Error(exception.Message, exception);
        }
    }
}
