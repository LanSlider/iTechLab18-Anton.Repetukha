using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.DAL.Entities
{
    public class Comment
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string DataTime { get; set; }

        [Required]
        public int FilmId { get; set; }
        [Required]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
