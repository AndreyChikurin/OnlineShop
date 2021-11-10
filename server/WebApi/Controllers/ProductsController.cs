namespace WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Net;
    using Application.DTO;
    using Application.DTO.Request;
    using Application.Interfaces;
    using Application.ViewModels;
    using Filtering;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using Swashbuckle.AspNetCore.Annotations;

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private IProductService productService;
        private ICategoryService categoryService;
        private ILogger<ProductsController> logger;

        public ProductsController(ILogger<ProductsController> logger, IProductService productService, ICategoryService categoryService)
        {
            this.logger = logger;
            this.productService = productService;
            this.categoryService = categoryService;
        }

        [HttpGet]
        public IEnumerable<ProductDto> GetProducts()
        {
            return productService.GetProducts();
        }

        [HttpGet]
        [Route("Pagination")]
        public IEnumerable<ProductDto> GetProducts(ProductFilter productFilter)
        {
            return productService.GetProducts(productFilter);
        }

        [SwaggerResponse((int)HttpStatusCode.OK, "Product has been received", typeof(ProductDto))]
        [SwaggerResponse((int)HttpStatusCode.NotFound, "Product not found")]
        [HttpGet("{id}")]
        public ActionResult<ProductDto> GetProduct(Guid id)
        {
            var product = productService.GetProduct(id);

            if (product is null)
            {
                return NotFound("Product not found");
            }

            return product;
        }

        [SwaggerResponse((int)HttpStatusCode.Created, "Product has been created", typeof(ProductDto))]
        [SwaggerResponse((int)HttpStatusCode.NotFound, "Category not found")]
        [HttpPost]
        public ActionResult<ProductDto> AddProduct(AddProductDto productDto)
        {
            CategoryDto exsistingGategory = categoryService.GetCategory(productDto.CategoryTypeId);

            if (exsistingGategory is null)
            {
                return NotFound("Category not found");
            }

            ProductDto product = productDto.AsDto();
            product.CategoryType = exsistingGategory;
            productService.AddProduct(product);
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut]
        [SwaggerResponse((int)HttpStatusCode.OK, "Product has been changed", typeof(ProductDto))]
        [SwaggerResponse((int)HttpStatusCode.NotFound, "Product not found or Category not found")]
        public ActionResult EditProduct(EditProductDto productDto)
        {
            var existingProduct = productService.GetProduct(productDto.Id);

            if (existingProduct is null)
            {
                return NotFound("Product not found");
            }

            var exsistingGategory = categoryService.GetCategory(productDto.CategoryTypeId);

            if (exsistingGategory is null)
            {
                return NotFound("Category not found");
            }

            var product = productDto.AsDto();
            product.CategoryType = exsistingGategory;

            productService.EditProduct(product);
            return Ok(product);
        }

        [SwaggerResponse((int)HttpStatusCode.NoContent, "Product has been deleted")]
        [SwaggerResponse((int)HttpStatusCode.NotFound, "Product not found")]
        [HttpDelete("{id}")]
        public ActionResult DeleteProduct(Guid id)
        {
            var existingProduct = productService.GetProduct(id);

            if (existingProduct is null)
            {
                return NotFound("Product not found");
            }

            productService.DeleteProduct(id);
            return Ok();
        }
    }
}
