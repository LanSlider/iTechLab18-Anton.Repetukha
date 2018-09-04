using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.BLL.Models
{
    public abstract class BaseModel
    {
        [Key]
        public int Id { get; set; }
    }
}
