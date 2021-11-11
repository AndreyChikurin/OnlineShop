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

        public IEnumerable<Product> GetProducts(ProductFilter productFilter)
        {
            int quantityPerPage = productFilter.QuantityPerPage;
            int pageNumber = productFilter.PageNumber;
            var filter = productFilter.Filter;
            var categoryId = productFilter.CategoryId;

            quantityPerPage = Math.Abs(quantityPerPage);
            pageNumber = Math.Abs(pageNumber);

            int listProductsCount = GetItemsCount();

            int skip = pageNumber * quantityPerPage;
            int take = listProductsCount - skip < quantityPerPage ? listProductsCount - skip : quantityPerPage;

            var result = context.Products.Include(c => c.CategoryType).ToList();

            if (context.Categories.Any(category => category.Id == categoryId))
            {
                var category = context.Categories.Where(category => category.Id == categoryId).First();
                result = context.Products.Where(product => product.CategoryType.Id == categoryId).ToList();
                listProductsCount = result.Count();
            }

            if (skip >= listProductsCount)
            {
                return null;
            }

            if (filter != null && filter.ToLower() == "increasingprice")
            {
                result = result.OrderBy(product => product.Price).ToList();
            }

            if (filter != null && filter.ToLower() == "decreasingprice")
            {
                result = result.OrderByDescending(product => product.Price).ToList();
            }

            return result.Skip(skip).Take(take).ToList();
        }

        public Product GetProduct(Guid id)
        {
            var product = context.Products.Include(c => c.CategoryType).SingleOrDefault(x => x.Id == id);

            return product;
        }

        public int GetItemsCount()
        {
            return context.Products.Count();
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