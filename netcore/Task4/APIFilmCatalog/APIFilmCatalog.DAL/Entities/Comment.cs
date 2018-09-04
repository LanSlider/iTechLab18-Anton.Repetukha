using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.DAL.Entities
{
    public class Comment : BaseEntity
    {
        [Required]
        public string Text { get; set; }
        [Required]
        public string DateTime { get; set; }
 
        [Required]
        public int FilmId { get; set; }
        [Required]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
