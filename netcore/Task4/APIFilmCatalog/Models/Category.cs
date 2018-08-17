using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.Models
{
    public class Category
    {
        [Key]
        [Required(ErrorMessage = "The parameter must be defined")]
        public int Id { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Name { get; set; }
    }
}
