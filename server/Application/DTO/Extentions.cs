namespace Application.DTO
{
    using Application.ViewModels;
    using Domain.Models;

    public static class Extentions
    {
        public static ProductDto AsDto(this Product product)
        {
            return new ProductDto()
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Img = product.Img,
                Quantity = product.Quantity,
            };
        }

        public static CategoryDto AsDto(this Category category)
        {
            return new CategoryDto()
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description,
            };
        }
    }
}
