namespace Application.Interfaces
{
    using System;
    using System.Collections.Generic;
    using Application.ViewModels;
    using Filtering;

    public interface IProductService
    {
        IEnumerable<ProductDto> GetProducts();

        ProductList GetProducts(ProductFilter productFilter);

        ProductDto GetProduct(Guid id);

        void AddProduct(ProductDto product);

        void EditProduct(ProductDto product);

        void DeleteProduct(Guid id);
    }
}
