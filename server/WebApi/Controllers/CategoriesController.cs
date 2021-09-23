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
    public class CategoriesController : ControllerBase
    {
        private ICategoriesRepository categoriesRepository;
        private ILogger<CategoriesController> logger;

        public CategoriesController(ILogger<CategoriesController> logger, ICategoriesRepository categoriesRepository)
        {
            this.logger = logger;
            this.categoriesRepository = categoriesRepository;
        }

        [HttpGet]
        public IEnumerable<CategoryDto> GetCategories()
        {
            var categories = categoriesRepository.GetCategories();

            return categories.Select(x => x.AsDto());
        }

        [HttpGet("{id}")]
        public ActionResult<CategoryDto> GetCategory(Guid id)
        {
            var category = categoriesRepository.GetCategory(id);

            if (category is null)
            {
                return NotFound();
            }

            return category.AsDto();
        }

        [HttpPost]
        public ActionResult<CategoryDto> AddCategory(AddCategoryDto categoryDto)
        {
            Category category = categoryDto.AsEntity();
            categoriesRepository.AddCategory(category);
            return CreatedAtAction(nameof(GetCategory), new { id = category.Id }, category.AsDto());
        }

        [HttpPut]
        public ActionResult<CategoryDto> EditCategory(EditCategoryDto categoryDto)
        {
            var existingCategory = categoriesRepository.GetCategory(categoryDto.Id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            Category category = categoryDto.AsEntity();
            categoriesRepository.EditCategory(category);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteCategory(Guid id)
        {
            var existingCategory = categoriesRepository.GetCategory(id);

            if (existingCategory is null)
            {
                return NotFound();
            }

            var categoryProducts = categoriesRepository.GetProducts(id);

            if (categoryProducts.Count() == 0)
            {
                categoriesRepository.DeleteCategory(id);
                return NoContent();
            }

            return Conflict();
        }
    }
}
