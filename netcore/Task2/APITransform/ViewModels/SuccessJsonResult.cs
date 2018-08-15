using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;

namespace APITransform.ViewModels
{
    public class SuccessJsonResult : BaseJsonResult
    {
        public SuccessJsonResult(Starships data)
        {
            this.data = data;
        }
    }
}
