﻿namespace APIFilmCatalog.BLL.Models
{
    public class RatingModel
    {
        public int Mark { get; set; }
  
        public int FilmId { get; set; }
        public int UserId { get; set; }
        public UserModel User { get; set; }
    }
}
