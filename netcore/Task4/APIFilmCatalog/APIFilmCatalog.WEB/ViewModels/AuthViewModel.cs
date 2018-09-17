using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.WEB.Models
{
    public class AuthViewModel
    {
        [Required]
        public string UserName { get; set; }
    
        [Required]
        public string Password { get; set; }
    }
}
