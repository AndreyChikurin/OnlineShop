namespace CleanArchitecture.Infra.Data.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Domain.Models;
    using Domain.Repository;
    using Infrastructure.EF;
    using Microsoft.EntityFrameworkCore;

    public class ProductRepository : IProductRepository
    {
        private DatabaseContext context;

        public ProductRepository(DatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products.Include(c => c.CategoryType).ToList();
        }

        public Product GetProduct(Guid id)
        {
            var product = context.Products.Include(c => c.CategoryType).SingleOrDefault(x => x.Id == id);

            return product;
        }
    }
}