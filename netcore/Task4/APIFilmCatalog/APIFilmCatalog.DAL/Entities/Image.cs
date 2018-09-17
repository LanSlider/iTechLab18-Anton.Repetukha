using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.DAL.Entities
{
    public class Image : BaseEntity
    {
        [Required]
        public string Url { get; set; }
        public Film Film { get; set; }
    }
}
