using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITransform.ViewModels
{
    public class ErrorJsonResult : BaseJsonResult
    {
        public ErrorJsonResult(string errorMessage)
        {
            this.errorMessage = errorMessage;
        }
    }
}
