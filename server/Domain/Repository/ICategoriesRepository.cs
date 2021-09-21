namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public interface ICategoriesRepository
    {
        IEnumerable<Category> GetCategories();

        Category GetCategory(Guid id);

        List<Product> GetProducts(Guid categoryId);
    }
}
