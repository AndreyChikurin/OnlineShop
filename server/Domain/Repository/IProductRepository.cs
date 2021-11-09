namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        IEnumerable<Product> GetProductsPagination(int quantityPerPage, int pageNumber);

        Product GetProduct(Guid id);

        void AddProduct(Product product);

        void EditProduct(Product product);

        void DeleteProduct(Guid id);
    }
}
