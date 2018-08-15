using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APISum.Models
{
    public class ValueViewModel
    {
        [Required(ErrorMessage = "The parameter must be defined")]
        [Range(1, Int32.MaxValue, ErrorMessage = "Value must be positive")]
        public int? Value1 { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        [Range(Int32.MinValue, -1, ErrorMessage = "Value must be negative")]
        public int? Value2 { get; set; }
    }
}
