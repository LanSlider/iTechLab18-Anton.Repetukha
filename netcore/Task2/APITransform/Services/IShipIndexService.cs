using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Models;

namespace APITransform.Services
{
    public interface IShipIndexService
    {
        List<Starship> AddIndexToList(List<Starship> list, int index = 1);
    }
}