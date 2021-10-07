namespace Application.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Application.DTO;
    using Application.Interfaces;
    using Application.ViewModels;
    using Domain.Repository;

    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public IEnumerable<ProductDto> GetProducts()
        {
            return _productRepository.GetProducts().Select(x => x.AsDto()).ToList();
        }

        public ProductDto GetProduct(Guid id)
        {
            var product = _productRepository.GetProduct(id);

            if (product is null)
            {
                return null;
            }

            return product.AsDto();
        }

        public void AddProduct(ProductDto productdto)
        {
            var id = productdto.CategoryType.Id;
            var product = productdto.AsEntity();
            product.CategoryType.Id = id;
            _productRepository.AddProduct(product);
            productdto.Id = product.Id;
        }

        public void EditProduct(ProductDto productdto)
        {
            var product = productdto.AsEntity();
            product.CategoryType.Id = productdto.CategoryType.Id;
            product.Id = productdto.Id;

            _productRepository.EditProduct(product);
        }

        public void DeleteProduct(Guid id)
        {
            _productRepository.DeleteProduct(id);
        }
    }
}
