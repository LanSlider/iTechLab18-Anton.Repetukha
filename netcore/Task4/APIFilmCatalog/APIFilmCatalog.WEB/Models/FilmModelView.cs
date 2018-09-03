using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.WEB.Models
{
    public class FilmModelView
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Category { get; set; }
        public float Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}
