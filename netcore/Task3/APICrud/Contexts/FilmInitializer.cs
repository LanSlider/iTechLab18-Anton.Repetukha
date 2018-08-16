using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICrud.Models;

namespace APICrud.Contexts
{
    public class FilmInitializer
    {
        private readonly FilmContext _context;

        public FilmInitializer(FilmContext context)
        {
            _context = context;
        }

        public async Task Seed()
        {
            if (!_context.Films.Any())
            {
                _context.AddRange(films);
                await _context.SaveChangesAsync();
            }            
        }

        List<Film> films = new List<Film>
        {
            new Film { Id = 1, Name = "SomeFilm", Country = "Belarussian", Producer = "Tom", Year = 1964 },
            new Film { Id = 2, Name = "SomeFilm2", Country = "Russian", Producer = "Alex", Year = 2000 }
        };
    }
}
