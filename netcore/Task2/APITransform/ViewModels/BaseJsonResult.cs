using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;
using Microsoft.AspNetCore.Mvc;

namespace APITransform.ViewModels
{
    public abstract class BaseJsonResult
    {
        public string errorMessage { get; set; }
        public Starships data { get; set; }
    }
}
