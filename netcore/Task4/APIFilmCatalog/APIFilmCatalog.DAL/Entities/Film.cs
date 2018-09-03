using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace APIFilmCatalog.DAL.Entities
{
    public class Film
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public int Year { get; set; }
        [Required]
        public string Director { get; set; }
        public double Rating { get; set; }
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }

        public ICollection<Image> Images { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
