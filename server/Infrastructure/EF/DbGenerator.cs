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
                    Img = "https://guide.alibaba.com/image/i4/casio-watches-casio-g-shock-series-of-casual-quartz-male-watch-ga-110gb-896ab-1a/TB1mMwbNXXXXXc6XFXXXXXXXXXX_!!0-item_pic.jpg",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "GA 110 White",
                    Price = 90,
                    Img = "https://topgshop.ru/image/cache/data/brands/casio/09/a2/ga-110c-7a/ga-110c-7a-1000x1000.jpg",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Patek Fhillippe Geneve",
                    Price = 95000,
                    Img = "https://www.replicaoutlet.it/wp-content/uploads/2018/06/4csg3fvnbm4.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Rolex Daytona",
                    Price = 10000,
                    Img = "https://images.ru.prom.st/876822388_w640_h640_chasy-rolex-cosmograph.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Casio Edifice EFR",
                    Price = 150,
                    Img = "https://egowatch.ru/image/cache/catalog/main/casio-edifice-efr-556pc-2a-720x720.jpg",
                    Quantity = 10,
                    CategoryType = categories[2],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Orient Chronograph",
                    Price = 300,
                    Img = "https://topgshop.ru/image/cache/data/brands/orient/fa/f7/ra-kv0005b/ra-kv0005b-1000x1000.jpg",
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
