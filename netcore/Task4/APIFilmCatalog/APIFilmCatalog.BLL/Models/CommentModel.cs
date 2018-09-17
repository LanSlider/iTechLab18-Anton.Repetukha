namespace APIFilmCatalog.BLL.Models
{
    public class CommentModel
    {
        public string Text { get; set; }
        public string DateTime { get; set; }

        public int FilmId { get; set; }
        public int UserId { get; set; }
        public UserModel User { get; set; }
    }
}
