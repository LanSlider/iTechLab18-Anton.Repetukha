namespace APIFilmCatalog.BLL.Models
{
    public class CommentModel
    {
        public string Text { get; set; }
        public string DateTime { get; set; }

        public int FilmId { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
    }
}
