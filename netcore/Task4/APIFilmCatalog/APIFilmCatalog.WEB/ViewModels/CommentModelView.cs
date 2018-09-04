using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.WEB.Models
{
    public class CommentModelView
    {
        [Required]
        public string Text { get; set; }
        public string DateTime { get; set; }

        [Required]
        public int FilmId { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
    }
}
