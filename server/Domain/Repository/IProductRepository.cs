﻿namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;
    using Filtering;

    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        IEnumerable<Product> GetProducts(ProductFilter productFilter);

        Product GetProduct(Guid id);

        int GetItemsCount();

        void AddProduct(Product product);

        void EditProduct(Product product);

        void DeleteProduct(Guid id);
    }
}
