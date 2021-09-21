namespace Infrastructure.EF
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public class DbGenerator
    {
        public static void Initial(DatabaseContext databaseContext)
        {
            List<Category> categories = new ()
            {
                new Category()
                {
                    Id = Guid.NewGuid(),
                    Name = "Digital Watches",
                    Description = "Digital watches are an ideal choice if you want a highly functional timepiece that can be used for sporty activities",
                },

                new Category()
                {
                    Id = Guid.NewGuid(),
                    Name = "Automatic Watches",
                    Description = "Our self-winding automatic watches are an ideal choice for those who want a watch that's timeless, functional and guarantee that will work for a very long time",
                },

                new Category()
                {
                    Id = Guid.NewGuid(),
                    Name = "Quartz Watches",
                    Description = "Built with quartz battery at the very core, quartz watch movements are one of the most reliable forms of timekeeping",
                },
            };

            List<Product> products = new ()
            {
                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "GA 110 Gold",
                    Price = 100,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "GA 110 White",
                    Price = 90,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Patek Fhillippe Geneve",
                    Price = 95000,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Rolex Daytona",
                    Price = 10000,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Casio Edifice EFR",
                    Price = 150,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[2],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Orient Chronograph",
                    Price = 300,
                    Img = "isNull",
                    Quantity = 10,
                    CategoryType = categories[2],
                },
            };

            databaseContext.Categories.AddRange(categories);
            databaseContext.Products.AddRange(products);
            databaseContext.SaveChanges();
        }
    }
}
