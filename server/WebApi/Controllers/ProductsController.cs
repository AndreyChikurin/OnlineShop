namespace WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Application.DTO;
    using Application.ViewModels;
    using Domain.Repository;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private IProductRepository productsRepository;
        private ICategoriesRepository categoriesRepository;
        private ILogger<ProductsController> logger;

        public ProductsController(ILogger<ProductsController> logger, IProductRepository productsRepository, ICategoriesRepository categoriesRepository)
        {
            this.logger = logger;
            this.productsRepository = productsRepository;
            this.categoriesRepository = categoriesRepository;
        }

        [HttpGet]
        public IEnumerable<ProductDto> GetProducts()
        {
            var products = productsRepository.GetProducts();

            return products.Select(x => x.AsDto());
        }

        [HttpGet("{id}")]
        public ActionResult<ProductDto> GetProduct(Guid id)
        {
            var product = productsRepository.GetProduct(id);

            if (product is null)
            {
                return NotFound();
            }

            return product.AsDto();
        }
    }
}
