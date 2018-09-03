using System;
using System.Collections.Generic;
using System.Text;

namespace APIFilmCatalog.BLL.Models
{
    public class ImageModel
    {
        public int Id { get; set; }
        public string Url { get; set; }

        public int FilmId { get; set; }
        public FilmModel Film { get; set; }
    }
}
