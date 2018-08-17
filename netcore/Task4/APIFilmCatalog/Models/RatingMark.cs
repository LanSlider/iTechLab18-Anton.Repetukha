using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.Models
{
    public class RatingMark
    {
        public int Id { get; set; }
        public int Mark { get; set; }

        public User User { get; set; }
        public Film Film { get; set; }

    }
}
