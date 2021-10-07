namespace Application.Interfaces
{
    using System;
    using System.Collections.Generic;
    using Application.ViewModels;

    public interface IProductService
    {
        IEnumerable<ProductDto> GetProducts();

        ProductDto GetProduct(Guid id);

        void AddProduct(ProductDto product);

        void EditProduct(ProductDto product);

        void DeleteProduct(Guid id);
    }
}
