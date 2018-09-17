using System;
using APIFilmCatalog.WEB.Exceptions;
using log4net;

namespace APIFilmCatalog.WEB.Services
{
    public class LoggerService : ILoggerService
    {
        private static readonly ILog _log = LogManager.GetLogger(typeof(LoggerService));

        public void Info(string logMessage)
        {
            _log.Info(logMessage);
        }

        public void Error(UserFriendlyException exception)
        {
            _log.Error(exception.UserFriendlyMessage, exception);
        }

        public void Error(Exception exception)
        {
            _log.Error(exception.Message, exception);
        }
    }
}
