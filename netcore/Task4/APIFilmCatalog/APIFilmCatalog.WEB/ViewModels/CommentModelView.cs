using System.ComponentModel.DataAnnotations;
using APIFilmCatalog.WEB.ViewModels;
using Newtonsoft.Json;

namespace APIFilmCatalog.WEB.Models
{
    public class CommentModelView
    {
        [Required]
        [JsonProperty(PropertyName = "text")]
        public string Text { get; set; }
        [JsonProperty(PropertyName = "dateTime")]
        public string DateTime { get; set; }

        [Required]
        [JsonProperty(PropertyName = "filmId")]
        public int FilmId { get; set; }
        [JsonProperty(PropertyName = "userId")]
        public int UserId { get; set; }
        [JsonProperty(PropertyName = "userName")]
        public string UserName { get; set; }
    }
}
