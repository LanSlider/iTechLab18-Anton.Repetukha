using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITransform.Models
{
    public class ShipData
    {
        public int count { get; set; }
        public string next { get; set; }
        public List<Starship> results { get; set; }
    }
}
