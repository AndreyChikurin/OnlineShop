namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public interface ICategoriesRepository
    {
        IEnumerable<Category> GetCategories();

        Category GetCategory(Guid id);

        void AddCategory(Category category);

        void EditCategory(Category category);

        void DeleteCategory(Guid id);

        List<Product> GetProducts(Guid categoryId);
    }
}
