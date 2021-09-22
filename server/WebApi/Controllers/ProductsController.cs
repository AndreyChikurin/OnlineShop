namespace WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Application.DTO;
    using Application.DTO.Request;
    using Application.ViewModels;
    using Domain.Models;
    using Domain.Repository;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
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

        [HttpPost]
        public ActionResult<ProductDto> AddProduct(AddProductDto productDto)
        {
            var exsistingGategory = categoriesRepository.GetCategory(productDto.CategoryTypeId);
            if (exsistingGategory is null)
            {
                return NotFound("Category not found");
            }

            Product product = productDto.AsEntity();
            product.CategoryType = exsistingGategory;
            productsRepository.AddProduct(product);
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product.AsDto());
        }

        [HttpPut]
        public ActionResult EditProduct(EditProductDto productDto)
        {
            var exsistingGategory = categoriesRepository.GetCategory(productDto.CategoryTypeId);
            if (exsistingGategory is null)
            {
                return NotFound("Category not found");
            }

            var existingProduct = productsRepository.GetProduct(productDto.Id);

            if (existingProduct is null)
            {
                return NotFound();
            }

            Product product = productDto.AsEntity();
            product.CategoryType = exsistingGategory;
            productsRepository.EditProduct(product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(Guid id)
        {
            var existingProduct = productsRepository.GetProduct(id);

            if (existingProduct is null)
            {
                return NotFound();
            }

            productsRepository.DeleteProduct(id);
            return NoContent();
        }
    }
}
