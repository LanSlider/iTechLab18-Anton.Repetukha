using System;

namespace APIFilmCatalog.WEB.Exceptions
{
    public class UserFriendlyException : Exception
    {
        public string UserFriendlyMessage { get; set; }

        public UserFriendlyException(string message)
        {
            UserFriendlyMessage = message;
        }
    }
}