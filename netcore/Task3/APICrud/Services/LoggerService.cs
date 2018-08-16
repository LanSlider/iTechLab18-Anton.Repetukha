using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Exceptions;
using log4net;
using Microsoft.AspNetCore.Mvc.Filters;

namespace APICrud.Services
{
    public class LoggerService : ILoggerService
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(LoggerService));

        public void Info(string logMessage)
        {
            _log.Info(logMessage);
        }

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
