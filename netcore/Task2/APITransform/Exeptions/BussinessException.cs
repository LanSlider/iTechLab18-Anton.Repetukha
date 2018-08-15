using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITransform.Exeptions
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
