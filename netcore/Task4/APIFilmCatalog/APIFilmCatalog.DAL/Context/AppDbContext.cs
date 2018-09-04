using APIFilmCatalog.DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace APIFilmCatalog.DAL.Context
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public DbSet<Film> Films { get; set; }
        //public DbSet<User> Users { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Image> Images { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Film>().HasMany(f => f.Images).WithOne(f => f.Film).OnDelete(DeleteBehavior.Cascade);
            //builder.Entity<Image>().HasOne(f => f.Film).WithMany(f => f.Images).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<User>().HasMany(u => u.Comments).WithOne(u => u.User).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<User>().HasMany(u => u.Ratings).WithOne(u => u.User).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
