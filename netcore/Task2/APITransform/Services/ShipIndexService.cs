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
        public List<Starship> AddIndexToList(List<Starship> list, int index = 0)
        {
            if(list == null)
            {
                throw new BussinessException("List is null");
            }
            for (int i = index; i < list.Count(); i++)
            {
                list[i].Index = i + 1;
            }

            return list;
        }
    }
}