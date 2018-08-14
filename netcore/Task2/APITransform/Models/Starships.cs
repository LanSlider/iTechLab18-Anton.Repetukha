using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITransform.Models
{
    public class Starships
    {
        public int count { get; set; }
        public List<Starship> results { get; set; }
    }
}
