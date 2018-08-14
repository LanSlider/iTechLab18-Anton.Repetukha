using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp.Serializers;

namespace APITransform.Models
{
    public class Starships
    {
        [SerializeAsAttribute]
        public int Count { get; set; }
        [SerializeAsAttribute]
        public List<Starship> Results { get; set; }
    }
}
