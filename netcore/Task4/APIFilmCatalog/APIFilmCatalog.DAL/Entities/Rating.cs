using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace APIFilmCatalog.DAL.Entities
{
    public class Rating
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int Mark { get; set; }

        [Required]
        public int FilmId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public User User { get; set; }
    }
}
