using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.Models
{
    public class Film
    {
        [Key]
        [Required(ErrorMessage = "The parameter must be defined")]
        public int Id { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Description { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        [Range(1800, 2100, ErrorMessage = "Invalid year of film")]
        public int Year { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Director { get; set; }

        public string AverageRating { get; set; }
    }
}
