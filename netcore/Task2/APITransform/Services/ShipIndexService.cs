using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITransform.Exeptions;
using APITransform.Models;

namespace APITransform.Services
{
    public class ShipIndexService : IShipIndexService
    {
        public List<Starship> AddIndexToList(List<Starship> list, int index = 1)
        {
            if(list == null)
            {
                throw new BussinessException("No results");
            }
            var i = index;
            list.ForEach(x => { x.Index = i++; });

            return list;
        }
    }
}