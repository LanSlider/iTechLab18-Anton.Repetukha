using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIFilmCatalog.Models;
using Microsoft.EntityFrameworkCore;

namespace APIFilmCatalog.Contexts
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
    }
}
