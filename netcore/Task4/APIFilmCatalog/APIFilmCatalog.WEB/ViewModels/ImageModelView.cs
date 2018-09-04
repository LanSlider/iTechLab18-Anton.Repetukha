namespace APIFilmCatalog.WEB.Models
{
    public class ImageModelView
    {
        public int Id { get; set; }
        public string Url { get; set; }

        public int FilmId { get; set; }
        public FilmModelView Film { get; set; }
    }
}
