using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace APIFilmCatalog.DAL.Entities
{
    public class User : IdentityUser
    {
        //public int Id { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
