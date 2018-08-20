using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIFilmCatalog.Models
{
    public class User
    {
        [Key]
        [Required(ErrorMessage = "The parameter must be defined")]
        public int Id { get; set; }

        public string Name { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Email { get; set; }

        [Required(ErrorMessage = "The parameter must be defined")]
        public string Password { get; set; }

        public string Role { get; set; }

        //public string PictureUrl { get; set; }

        public User()
        {
            Role = "user";
        }
    }
}
