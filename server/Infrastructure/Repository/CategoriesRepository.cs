namespace CleanArchitecture.Infra.Data.Repositories
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
            return _context.Products.Where(x => x.CategoryType.Id == categoryId).ToList();
        }

        public void EditCategory(Category category)
        {
            var existingCategory = _context.Categories.Where(x => x.Id == category.Id).SingleOrDefault();
            _context.Categories.Remove(existingCategory);
            _context.Categories.Add(category);
            _context.SaveChanges();
        }

        public void DeleteCategory(Guid id)
        {
            var existingCategory = _context.Categories.Where(x => x.Id == id).SingleOrDefault();
            _context.Categories.Remove(existingCategory);
            _context.SaveChanges();
        }

        public void AddCategory(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
        }
    }
}
