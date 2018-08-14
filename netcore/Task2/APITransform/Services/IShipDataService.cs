using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;

namespace APITransform.Services
{
    public interface IShipDataService
    {
        Starships GetData();
        Task<Starships> GetDataAsync();
        Task<Starships> GetAllDataAsync();
    }
}
