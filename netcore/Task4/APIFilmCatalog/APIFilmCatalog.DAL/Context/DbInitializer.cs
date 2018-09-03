using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace APIFilmCatalog.DAL.Context
{
    public class DbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                AppDbContext context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                //context.Films.RemoveRange(context.Films.ToList());
                //context.Images.RemoveRange(context.Images.ToList());
                //context.SaveChanges();

                if (!context.Films.Any())
                {
                    context.AddRange(films);
                    context.SaveChanges();
                }
            }      
        }

        static List<Film> films = new List<Film>
        {
            new Film
            {
                Title = "The Dark Knight",
                Year = 2008,
                Country = "United States",
                Director = "Christopher Nolan",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Action",
                Description = "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. " +
                "The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_SX1777_CR0,0,1777,756_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTM1Njc5NTE0M15BMl5BanBnXkFtZTcwMDgzMTk2Mw@@._V1_SX1777_CR0,0,1777,756_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTYxMTA1MjU4Nl5BMl5BanBnXkFtZTcwMjgzMTk2Mw@@._V1_SX1777_CR0,0,1777,756_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTgzMzkyNjAwOV5BMl5BanBnXkFtZTcwNzgzMTk2Mw@@._V1_SX1777_CR0,0,1777,747_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjA3NTc5MDg5MF5BMl5BanBnXkFtZTcwODgzMTk2Mw@@._V1_SX1777_CR0,0,1777,755_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTkyNTI0NDM5NF5BMl5BanBnXkFtZTcwMDkzMTk2Mw@@._V1_SX1777_CR0,0,1777,757_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "The Godfather",
                Year = 1972,
                Country = "United States",
                Director = "Francis Ford Coppola",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Crime",
                Description = "Vito (Marlon Brando), the head of the Corleone Mafia family, is known to friends and associates as 'Godfather'. " +
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_SY1000_CR0,0,1248,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_SX1375_CR0,0,1375,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BOGU1YjI0NmEtN2JiZi00YWRjLWJkMjctODFlMjgyYTA1MmJiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,1350,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNjk3MWYyZjAtY2M5Ni00OTIzLTkxMTItZWEwM2M2Y2E3NDcxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,1272,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMDhkYzhiYjEtMTQwYy00MTdmLTlkOTAtYTk1YmMyYmE5NDVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,657,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "The Godfather: Part II",
                Year = 1974,
                Country = "United States",
                Director = "Francis Ford Coppola",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Crime",
                Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTQ3MzA3ODcwNF5BMl5BanBnXkFtZTgwNTI4NjIwMjE@._V1_SY1000_CR0,0,908,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjM4MDIyNzQyOF5BMl5BanBnXkFtZTgwNzI4NjIwMjE@._V1_SY1000_CR0,0,907,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTg5NTIyOTgxOV5BMl5BanBnXkFtZTgwNDE4NjIwMjE@._V1_SY1000_CR0,0,1422,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTA1MzgzODQyMDReQTJeQWpwZ15BbWU4MDYwODYyMDIx._V1_SX687_CR0,0,687,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTkzNjA4OTQ5Nl5BMl5BanBnXkFtZTgwNzE4NjIwMjE@._V1_SY1000_CR0,0,797,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTQ1ODU1MzI4Nl5BMl5BanBnXkFtZTgwMzI4NjIwMjE@._V1_SY1000_CR0,0,1421,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Forrest Gump",
                Year = 1994,
                Country = "United States",
                Director = "Robert Zemeckis",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Drama",
                Description = "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTc2NDA0OTc2Ml5BMl5BanBnXkFtZTcwMzI1Njc2OA@@._V1_SY1000_CR0,0,1510,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTMxMjExNTU0NV5BMl5BanBnXkFtZTcwNzM2NDY3Mw@@._V1_SY1000_CR0,0,671,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTUzMjgyNTQ3OF5BMl5BanBnXkFtZTYwNTcxMzg2._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjE5OTg0MDQwOF5BMl5BanBnXkFtZTYwOTYxMzg2._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTQ3NzAzNjUxMl5BMl5BanBnXkFtZTYwMTcxMzg2._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjE4MTE4OTA4NV5BMl5BanBnXkFtZTYwMzcxMzg2._V1_.jpg" },
                }
            },
            new Film
            {
                Title = "Schindler's List",
                Year = 1993,
                Country = "United States",
                Director = "Robert Zemeckis",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Steven Spielberg",
                Description = "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTgwNzg3MDkxM15BMl5BanBnXkFtZTcwMzA2MDAxMw@@._V1_SY1000_CR0,0,1459,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTc4NTA1OTE4Nl5BMl5BanBnXkFtZTcwODA2MDAxMw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTM4OTczNjU1OF5BMl5BanBnXkFtZTcwMzU2MDAxMw@@._V1_SY1000_CR0,0,673,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTYxNDExMDI3NV5BMl5BanBnXkFtZTcwMDY2MDAxMw@@._V1_SY1000_CR0,0,1497,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTYzMjk5NjU3NV5BMl5BanBnXkFtZTcwMzU1MDAxMw@@._V1_SY1000_CR0,0,677,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTI4MjA2MDQ3Ml5BMl5BanBnXkFtZTcwMzY1MDAxMw@@._V1_SY1000_CR0,0,1512,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Pulp Fiction",
                Year = 1994,
                Country = "United States",
                Director = "Quentin Tarantino",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Crime",
                Description = "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTAxMTUyOTY1MTReQTJeQWpwZ15BbWU4MDEyODkxMDIx._V1_SY1000_CR0,0,1463,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTgxNDYxNjMzNF5BMl5BanBnXkFtZTgwODE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjAyMjUyNzg1Ml5BMl5BanBnXkFtZTgwNzAwMzg5MTE@._V1_SY1000_CR0,0,1506,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BOTc4MTY2NjM5NF5BMl5BanBnXkFtZTgwNjE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjE1ODYxOTkxOF5BMl5BanBnXkFtZTgwNTE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Inception",
                Year = 2010,
                Country = "United States",
                Director = "Christopher Nolan",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Action",
                Description = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNDExNDYxODc1MF5BMl5BanBnXkFtZTcwNDQ0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTQ3NTU4MjA2Ml5BMl5BanBnXkFtZTcwNjQ0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTI3ODA1ODkwN15BMl5BanBnXkFtZTcwODQ0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTU3NTIyOTQyOV5BMl5BanBnXkFtZTcwMTU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNTQ5NzI5ODUyOV5BMl5BanBnXkFtZTcwMzU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTMxODk0MTAzNl5BMl5BanBnXkFtZTcwNDU0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "The Meg",
                Year = 2018,
                Country = "Australia",
                Director = "Jon Turteltaub",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Action",
                Description = "After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjExOTQ5NjQwNF5BMl5BanBnXkFtZTgwMjU5OTcwNjM@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjQ0NTY1NTQyM15BMl5BanBnXkFtZTgwOTM5OTcwNjM@._V1_SY1000_CR0,0,1499,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTcwMzk0MjQ0NF5BMl5BanBnXkFtZTgwMTQ5OTcwNjM@._V1_SX1777_CR0,0,1777,744_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTYxNjA3NTQwMV5BMl5BanBnXkFtZTgwOTMzMzQwNjM@._V1_SX1777_CR0,0,1777,744_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjIxMzg0NTY2NF5BMl5BanBnXkFtZTgwOTE3MTU3NTM@._V1_SX1777_CR0,0,1777,744_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjA1MjE4ODI0OV5BMl5BanBnXkFtZTgwMDI3MTU3NTM@._V1_SX1777_CR0,0,1777,744_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Mission: Impossible",
                Year = 2016,
                Country = "Australia",
                Director = "Christopher McQuarrie",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Action",
                Description = "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTA2Mzk4NDc2NDdeQTJeQWpwZ15BbWU4MDM2NDExOTUz._V1_SY1000_CR0,0,1502,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTczMTA1MzAwOF5BMl5BanBnXkFtZTgwNDY0MTE5NTM@._V1_SY1000_CR0,0,1595,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTU1OTQxMjEyNF5BMl5BanBnXkFtZTgwNTY0MTE5NTM@._V1_SY1000_CR0,0,630,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNTA0OTMxNjAyM15BMl5BanBnXkFtZTgwNjY0MTE5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjI5ODIwNjY2M15BMl5BanBnXkFtZTgwNzY0MTE5NTM@._V1_SY1000_CR0,0,796,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BOTM1MzM2MzIxM15BMl5BanBnXkFtZTgwODY0MTE5NTM@._V1_SY1000_CR0,0,754,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Deadpool",
                Year = 2016,
                Country = "United States",
                Director = "Tim Miller",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/lB95KLmpLR4",
                Category = "Adventure",
                Description = "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjEyNTIwNDI5N15BMl5BanBnXkFtZTgwNjM3Nzk3ODE@._V1_SY1000_CR0,0,1371,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNTk3ODUyNDMzNF5BMl5BanBnXkFtZTgwNzM3Nzk3ODE@._V1_SY1000_CR0,0,1356,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTAzNzE3MDQ5NDReQTJeQWpwZ15BbWU4MDgzNzc5Nzgx._V1_SY1000_SX1500_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMzYyNTgzNTYwMl5BMl5BanBnXkFtZTgwODk2Nzc5NzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMzYyNjI0MzA3M15BMl5BanBnXkFtZTgwMDA3Nzc5NzE@._V1_SX1777_CR0,0,1777,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMzQ2ZWYyMzYtNWUxMS00ZDVlLTk2NTAtODg1YjllYjRhOWNlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Pan's Labyrinth",
                Country = "Kanada",
                Year = 2006,
                Director = "Guillermo del Toro",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/bRaL1rXOwSM",
                Category = "Fantasy",
                Description = "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTg5ODQxODI4M15BMl5BanBnXkFtZTcwODk2MzA1OQ@@._V1_SX1471_CR0,0,1471,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTkyNTcyODI3M15BMl5BanBnXkFtZTcwNjIzMTg0NA@@._V1_SY1000_CR0,0,1502,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTcyMjc5MTQyM15BMl5BanBnXkFtZTcwNzIzMTg0NA@@._V1_SY1000_CR0,0,1509,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTczNTY5NDMzOF5BMl5BanBnXkFtZTcwNDI5MDg3Mw@@._V1_SY1000_CR0,0,1504,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTc5NTg0MDI1NV5BMl5BanBnXkFtZTcwNTI5MDg3Mw@@._V1_SY1000_CR0,0,1490,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BODkyMzk4OTAyNF5BMl5BanBnXkFtZTcwNjI5MDg3Mw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Justice League",
                Country = "Kanada",
                Year = 2017,
                Director = "Zack Snyder",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/bRaL1rXOwSM",
                Category = "Fantasy",
                Description = "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjA0MDQ4MzAwMF5BMl5BanBnXkFtZTgwNzM4MzIxNDM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTYwNTcxMDk1NV5BMl5BanBnXkFtZTgwODM4MzIxNDM@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjEzOTcyNDExMl5BMl5BanBnXkFtZTgwOTM4MzIxNDM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjI1ODcxMjU2OF5BMl5BanBnXkFtZTgwMDQ4MzIxNDM@._V1_SY1000_CR0,0,1501,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BNTk3OTM0ODE3NF5BMl5BanBnXkFtZTgwMTQ4MzIxNDM@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjQ3OTkxMzU2MV5BMl5BanBnXkFtZTgwMDU2NDAxNDM@._V1_SY1000_CR0,0,1499,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Jaws",
                Country = "Kanada",
                Year = 1975,
                Director = "Steven Spielberg",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BM2YyYzA5YTMtZjc2NS00ZTk4LTk5ODYtODk1ZjhjMWU5NzFhL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SY1000_CR0,0,710,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/bRaL1rXOwSM",
                Category = "Fantasy",
                Description = "A local sheriff, a marine biologist and an old seafarer team up to hunt down a great white shark wreaking havoc in a beach resort.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTUwNzExMTA3NF5BMl5BanBnXkFtZTgwNDE3NTQ1MDI@._V1_SY1000_CR0,0,1250,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTUyNDkyNzc2NF5BMl5BanBnXkFtZTgwNTE3NTQ1MDI@._V1_SY1000_CR0,0,799,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BOTg4NTYxMjU3MF5BMl5BanBnXkFtZTgwNjE3NTQ1MDI@._V1_SY1000_CR0,0,802,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjIyMjkzMDE4OF5BMl5BanBnXkFtZTcwNzI2ODU2Nw@@._V1_SX1777_CR0,0,1777,759_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTU4MDE4MTExOV5BMl5BanBnXkFtZTcwNzkwODQyNw@@._V1_SY1000_CR0,0,1263,1000_AL_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjA0MDA2NzgyOF5BMl5BanBnXkFtZTcwNzAxODQyNw@@._V1_SY1000_CR0,0,1511,1000_AL_.jpg" },
                }
            },
            new Film
            {
                Title = "Star Wars: The Last Jedi",
                Country = "Deutschland",
                Year = 2017,
                Director = "Rian Johnson",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
                VideoUrl = "https://www.youtube.com/embed/bRaL1rXOwSM",
                Category = "Adventure",
                Description = "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. " +
                "Meanwhile, the Resistance prepares for battle with the First Order.",
                Images = new Collection<Image>()
                {
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BYWI3ZmRmZjMtYzdjYi00MDk3LWFhNmQtM2UwMTgwNjdjZjM2XkEyXkFqcGdeQXVyNDY5NDM2NTU@._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjAzMjI5NzA2Nl5BMl5BanBnXkFtZTgwOTgwMDAyNDM@._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTg2NDg4NjcxOV5BMl5BanBnXkFtZTgwMDkwMDAyNDM@._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTExNDk5NDMwOTBeQTJeQWpwZ15BbWU4MDE5MDAwMjQz._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMTUxODg2MzQyN15BMl5BanBnXkFtZTgwMjkwMDAyNDM@._V1_.jpg" },
                    new Image(){Url="https://m.media-amazon.com/images/M/MV5BMjE3NDI5Njc1N15BMl5BanBnXkFtZTgwMzkwMDAyNDM@._V1_.jpg" },
                }
            },
        };
    }
}
