namespace Application.Services
{
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

        public List<ProductDto> GetProducts()
        {
            return _productRepository.GetProducts().Select(x => x.AsDto()).ToList();
        }
    }
}
