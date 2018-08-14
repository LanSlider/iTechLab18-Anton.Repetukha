using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APISum.Models
{
    public class ResultModel
    {
        public int A { get; set; }
        public int B { get; set; }
        public int Sum { get; set; }
    }
}
