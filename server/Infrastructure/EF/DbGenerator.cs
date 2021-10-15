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
                    ImgUrl = "https://guide.alibaba.com/image/i4/casio-watches-casio-g-shock-series-of-casual-quartz-male-watch-ga-110gb-896ab-1a/TB1mMwbNXXXXXc6XFXXXXXXXXXX_!!0-item_pic.jpg",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "GA 110 White",
                    Price = 90,
                    ImgUrl = "https://topgshop.ru/image/cache/data/brands/casio/09/a2/ga-110c-7a/ga-110c-7a-1000x1000.jpg",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Patek Fhillippe Geneve",
                    Price = 95000,
                    ImgUrl = "https://www.replicaoutlet.it/wp-content/uploads/2018/06/4csg3fvnbm4.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Rolex Daytona",
                    Price = 10000,
                    ImgUrl = "https://images.ru.prom.st/876822388_w640_h640_chasy-rolex-cosmograph.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Casio Edifice EFR",
                    Price = 150,
                    ImgUrl = "https://egowatch.ru/image/cache/catalog/main/casio-edifice-efr-556pc-2a-720x720.jpg",
                    Quantity = 10,
                    CategoryType = categories[2],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Orient Chronograph",
                    Price = 300,
                    ImgUrl = "https://topgshop.ru/image/cache/data/brands/orient/fa/f7/ra-kv0005b/ra-kv0005b-1000x1000.jpg",
                    Quantity = 10,
                    CategoryType = categories[2],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Apple Watch 6 series",
                    Price = 500,
                    ImgUrl = "https://d2j6dbq0eux0bg.cloudfront.net/images/14574065/1681854779.jpg",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Huawei Watch 3 Black",
                    Price = 400,
                    ImgUrl = "https://avatars.mds.yandex.net/get-mpic/4579830/img_id3011658413788596172.jpeg/orig",
                    Quantity = 10,
                    CategoryType = categories[0],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Invicta Pro Diver",
                    Price = 140,
                    ImgUrl = "https://cdn2.jomashop.com/media/catalog/product/i/n/invicta-pro-diver-blue-dial-men_s-watch-17056.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Orient Bambino",
                    Price = 210,
                    ImgUrl = "https://senmix.com/pictures/product/02/52/bambino-automatic-mat-tron-mau-xanh-day-da-mau-nau-lich-ngay-ac08002f.jpg",
                    Quantity = 10,
                    CategoryType = categories[1],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Polet",
                    Price = 270,
                    ImgUrl = "https://www.citytime.ru/upload/iblock/f76/d60/image.jpeg",
                    Quantity = 10,
                    CategoryType = categories[2],
                },

                new Product()
                {
                    Id = Guid.NewGuid(),
                    Name = "Longines Master Collection",
                    Price = 90,
                    ImgUrl = "https://luks33.ru/image/cache/catalog/mens/0/timenn-ru-image-cache-data-Longines-rovno-longines-20master-20goldentimenn-ru-3-990x990-900x900.jpg",
                    Quantity = 10,
                    CategoryType = categories[2],
                },
            };

            List<User> users = new ()
            {
                new User()
                {
                    Id = Guid.NewGuid(),
                    Email = "Hrago@mail.ru",
                    Password = "123456",
                    Role = "Admin",
                },
            };

            databaseContext.Users.AddRange(users);
            databaseContext.Categories.AddRange(categories);
            databaseContext.Products.AddRange(products);
            databaseContext.SaveChanges();
        }
    }
}
