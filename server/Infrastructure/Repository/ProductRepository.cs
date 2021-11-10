namespace CleanArchitecture.Infra.Data.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Domain.Models;
    using Domain.Repository;
    using Filtering;
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

        public IEnumerable<Product> GetProducts(ProductFilter productFiler)
        {
            var quantityPerPage = productFiler.QuantityPerPage;
            var pageNumber = productFiler.PageNumber;
            var filer = productFiler.Filter;
            var categoryId = productFiler.CategoryId;

            quantityPerPage = Math.Abs(quantityPerPage);
            pageNumber = Math.Abs(pageNumber);

            var listProductsCount = GetProducts().Count();

            var skip = pageNumber * quantityPerPage;
            var take = listProductsCount - skip < quantityPerPage ? listProductsCount - skip : quantityPerPage;

            if (skip >= listProductsCount)
            {
                return null;
            }

            var result = context.Products.Include(c => c.CategoryType).Skip(skip).Take(take);

            if (filer.ToLower() == "increasing price")
            {
                result = result.OrderBy(product => product.Price);
            }

            if (filer.ToLower() == "decreasing price")
            {
                result = result.OrderByDescending(product => product.Price);
            }

            if (context.Categories.Any(category => category.Id == categoryId))
            {
                var category = context.Categories.Where(category => category.Id == categoryId).First();
                result = context.Products.Where(product => product.CategoryType.Id == categoryId);
            }

            return result.ToList();
        }

        public Product GetProduct(Guid id)
        {
            var product = context.Products.Include(c => c.CategoryType).SingleOrDefault(x => x.Id == id);

            return product;
        }

        public void AddProduct(Product product)
        {
            var existingCategory = context.Categories.Where(x => x.Id == product.CategoryType.Id).SingleOrDefault();
            product.CategoryType = existingCategory;
            context.Products.Add(product);
            context.SaveChanges();
        }

        public void EditProduct(Product product)
        {
            var existingProduct = context.Products.Where(x => x.Id == product.Id).SingleOrDefault();
            context.Products.Remove(existingProduct);
            var existingCategory = context.Categories.Where(x => x.Id == product.CategoryType.Id).SingleOrDefault();
            product.CategoryType = existingCategory;
            context.Products.Add(product);
            context.SaveChanges();
        }

        public void DeleteProduct(Guid id)
        {
            var product = context.Products.Where(x => x.Id == id).SingleOrDefault();
            context.Products.Remove(product);
            context.SaveChanges();
        }
    }
}