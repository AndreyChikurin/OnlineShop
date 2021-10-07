namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        Product GetProduct(Guid id);

        void AddProduct(Product product);

        void EditProduct(Product product);

        void DeleteProduct(Guid id);
    }
}
