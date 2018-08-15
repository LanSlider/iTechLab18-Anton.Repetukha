﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;

namespace APITransform.Services
{
    public interface IShipDataService
    {
        ShipData GetData();
        Task<ShipData> GetDataAsync();
        Task<ShipData> GetAllDataAsync();
    }
}
