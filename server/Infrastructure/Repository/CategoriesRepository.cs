namespace Infrastructure.Repository
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Domain.Models;
    using Domain.Repository;
    using Infrastructure.EF;

    public class CategoriesRepository : ICategoriesRepository
    {
        private DatabaseContext _context;

        public CategoriesRepository(DatabaseContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }

        public Category GetCategory(Guid id)
        {
            var category = _context.Categories.Where(x => x.Id == id).SingleOrDefault();

            return category;
        }

        public List<Product> GetProducts(Guid categoryId)
        {
            return _context.Categories.Where(x => x.Id == categoryId).SingleOrDefault().Products;
        }
    }
}
