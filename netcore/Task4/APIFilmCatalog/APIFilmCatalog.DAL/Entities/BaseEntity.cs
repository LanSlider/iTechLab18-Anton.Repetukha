using System.ComponentModel.DataAnnotations;

namespace APIFilmCatalog.DAL.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
