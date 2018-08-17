﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.ViewModels
{
    public class SuccessJsonResult<T> : BaseJsonResult<T>
    {
        public SuccessJsonResult(T data)
        {
            this.Data = data;
        }
    }
}