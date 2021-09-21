namespace WebApi.Controllers
{
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
        public IEnumerable<Product> GetProducts()
        {
            var products = productsRepository.GetProducts();

            return products.Select(x => x.AsDto());
        }
    }
}
