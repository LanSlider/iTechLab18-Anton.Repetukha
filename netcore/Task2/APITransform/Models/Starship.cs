using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APITransform.Models
{
    public class Starship
    {
        public string name { get; set; }
        public string model { get; set; }
        public int index { get; set; }
        public DateTime created { get; set; }
        public DateTime edited { get; set; }
        public string url { get; set; }
    }
}
