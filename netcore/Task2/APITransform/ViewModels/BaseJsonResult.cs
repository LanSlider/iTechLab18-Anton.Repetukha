using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;
using Microsoft.AspNetCore.Mvc;

namespace APITransform.ViewModels
{
    public abstract class BaseJsonResult<T>
    {
        public string ErrorMessage { get; set; }
        public T Data { get; set; }
    }
}
