using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APISum.Models
{
    public class ValueModel
    {
        [Required(ErrorMessage = "The parameter must be defined")]
        [RegularExpression("^[1-9][0-9]*$", ErrorMessage = "Value must be positive")]
        public int? Value1 { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        [RegularExpression("^-[1-9][0-9]*$", ErrorMessage = "Value must be negative")]
        public int? Value2 { get; set; }
    }
}
