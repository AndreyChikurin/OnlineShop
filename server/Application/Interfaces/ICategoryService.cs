namespace Application.Interfaces
{
    using System;
    using System.Collections.Generic;
    using Application.DTO.Request;
    using Application.ViewModels;

    public interface ICategoryService
    {
        IEnumerable<CategoryDto> GetCategories();

        CategoryDto GetCategory(Guid id);

        void AddCategory(CategoryDto categoryDto);

        void EditCategory(EditCategoryDto categoryDto);

        void DeleteCategory(Guid id);

        IEnumerable<ProductDto> GetProducts(Guid categoryId);
    }
}
