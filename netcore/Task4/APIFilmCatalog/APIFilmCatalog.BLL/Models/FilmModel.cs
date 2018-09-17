namespace APIFilmCatalog.BLL.Models
{
    public class FilmModel : BaseModel
    {
        public string Title { get; set; }
        public int Year { get; set; }
        public string Category { get; set; }
        public float Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}