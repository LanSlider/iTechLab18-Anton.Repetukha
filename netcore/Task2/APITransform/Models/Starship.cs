using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp.Serializers;

namespace APITransform.Models
{
    public class Starship
    {
        [SerializeAsAttribute]
        public string Name { get; set; }
        [SerializeAsAttribute]
        public string Model { get; set; }
        [SerializeAsAttribute]
        public int Index { get; set; }
        [SerializeAsAttribute]
        public DateTime Created { get; set; }
        [SerializeAsAttribute]
        public DateTime Edited { get; set; }
        [SerializeAsAttribute]
        public string Url { get; set; }
    }
}
