using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace APIFilmCatalog.DAL.Entities
{
    public class Image
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Url { get; set; }
        public Film Film { get; set; }
    }
}
