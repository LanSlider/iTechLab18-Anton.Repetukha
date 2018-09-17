using System;
using APIFilmCatalog.WEB.Exceptions;

namespace APIFilmCatalog.WEB.Services
{
    public interface ILoggerService
    {
        void Info(string logMessage);
        void Error(UserFriendlyException exception);
        void Error(Exception exception);
    }
}
