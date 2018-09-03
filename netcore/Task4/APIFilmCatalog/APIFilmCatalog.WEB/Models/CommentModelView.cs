using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.WEB.Models
{
    public class CommentModelView
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        public string DateTime { get; set; }
        public string UserName { get; set; }

        public string UserId { get; set; }


        //[Required]
        //public int Id { get; set; }
        //[Required]
        //public string Text { get; set; }
        //[Required]
        //public string DataTime { get; set; }

        //[Required]
        //public int FilmId { get; set; }
        //[Required]
        //public int UserId { get; set; }
        //public User User { get; set; }
    }
}
