namespace WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Application.DTO;
    using Application.DTO.Request;
    using Application.Interfaces;
    using Application.ViewModels;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private ICategoryService categoryService;
        private ILogger<CategoriesController> logger;

        public CategoriesController(ILogger<CategoriesController> logger, ICategoryService categoryService)
        {
            this.logger = logger;
            this.categoryService = categoryService;
        }

        [HttpGet]
        public IEnumerable<CategoryDto> GetCategories()
        {
            return categoryService.GetCategories();
        }

        [HttpGet("{id}")]
        public ActionResult<CategoryDto> GetCategory(Guid id)
        {
            var category = categoryService.GetCategory(id);

            if (category is null)
            {
                return NotFound();
            }

            return category;
        }

        [HttpPost]
        public ActionResult<CategoryDto> AddCategory(AddCategoryDto categoryDto)
        {
            var category = categoryDto.AsDto();
            categoryService.AddCategory(category);
            return Ok(category);
        }

        [HttpPut]
        public ActionResult<CategoryDto> EditCategory(EditCategoryDto categoryDto)
        {
            var existingCategory = categoryService.GetCategory(categoryDto.Id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            categoryService.EditCategory(categoryDto);
            return Ok(categoryDto);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteCategory(Guid id)
        {
            var existingCategory = categoryService.GetCategory(id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            var categoryProducts = categoryService.GetProducts(id);

            if (categoryProducts.Count() == 0)
            {
                categoryService.DeleteCategory(id);
                return Ok();
            }

            return Conflict();
        }
    }
}