using System.ComponentModel.DataAnnotations;

namespace APICrud.Models
{
    public class Film
    {
        [Key]
        [Required(ErrorMessage = "The parameter must be defined")]
        public int Id { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Country { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        [Range(1200, 2100, ErrorMessage = "Invalid year of film")]
        public int Year { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Producer { get; set; }
    }
}
