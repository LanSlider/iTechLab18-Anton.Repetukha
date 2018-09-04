using System;

namespace APIFilmCatalog.WEB.Exceptions
{
    public class BussinessException : Exception
    {
        public string UserFriendlyMessage { get; set; }

        public BussinessException(string message)
        {
            UserFriendlyMessage = message;
        }
    }
}