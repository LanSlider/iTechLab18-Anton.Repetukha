using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace APIFilmCatalog.WEB.ViewModels
{
    public class RatingModelView
    {
        [Required]
        [JsonProperty(PropertyName = "mark")]
        public int Mark { get; set; }

        [Required]
        [JsonProperty(PropertyName = "filmId")]
        public int FilmId { get; set; }
    }
}
