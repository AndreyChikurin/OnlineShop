namespace Domain.Repository
{
    using System;
    using System.Collections.Generic;
    using Domain.Models;

    public interface ICategoriesRepository
    {
        IEnumerable<Category> GetCategories();

        Category GetProduct(Guid id);
    }
}