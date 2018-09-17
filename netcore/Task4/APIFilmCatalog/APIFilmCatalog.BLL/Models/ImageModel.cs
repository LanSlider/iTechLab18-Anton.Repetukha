namespace APIFilmCatalog.BLL.Models
{
    public class ImageModel : BaseModel
    {
        public string Url { get; set; }

        public int FilmId { get; set; }
        public FilmModel Film { get; set; }
    }
}
