namespace Application.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Application.DTO;
    using Application.DTO.Request;
    using Application.Interfaces;
    using Application.ViewModels;
    using Domain.Repository;

    public class CategoryService : ICategoryService
    {
        private ICategoriesRepository _categoriesRepository;

        public CategoryService(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;
        }

        public IEnumerable<CategoryDto> GetCategories()
        {
            return _categoriesRepository.GetCategories().Select(x => x.AsDto()).ToList();
        }

        public CategoryDto GetCategory(Guid id)
        {
            var category = _categoriesRepository.GetCategory(id);

            if (category is null)
            {
                return null;
            }

            return category.AsDto();
        }

        public IEnumerable<ProductDto> GetProducts(Guid categoryDtoId)
        {
            return _categoriesRepository.GetProducts(categoryDtoId).Select(x => x.AsDto());
        }

        public void EditCategory(EditCategoryDto categoryDto)
        {
            var category = categoryDto.AsEntity();
            _categoriesRepository.EditCategory(category);
        }

        public void DeleteCategory(Guid id)
        {
            _categoriesRepository.DeleteCategory(id);
        }

        public void AddCategory(CategoryDto categoryDto)
        {
            var category = categoryDto.AsEntity();
            _categoriesRepository.AddCategory(category);
            categoryDto.Id = category.Id;
        }
    }
}
