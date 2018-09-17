using System.Collections.Generic;

namespace APIFilmCatalog.BLL.Models
{
    public class FilmDetailsModel : BaseModel
    {
        public string Title { get; set; }
        public string Country { get; set; }
        public int Year { get; set; }
        public string Category { get; set; }
        public string Director { get; set; }
        public float Rating { get; set; }
        public string ImageUrl { get; set; }
        public string VideoUrl { get; set; }
        public string Description { get; set; }
        public ICollection<ImageModel> Images { get; set; }
    }
}