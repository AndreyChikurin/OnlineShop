namespace Application.DTO
{
    using System;
    using Application.DTO.Request;
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
                ImgUrl = product.ImgUrl,
                Quantity = product.Quantity,
                CategoryType = product.CategoryType.AsDto(),
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

        public static Category AsEntity(this CategoryDto categoryDto)
        {
            return new Category()
            {
                Id = Guid.NewGuid(),
                Name = categoryDto.Name,
                Description = categoryDto.Description,
            };
        }

        public static Product AsEntity(this ProductDto productDto)
        {
            return new Product()
            {
                Id = Guid.NewGuid(),
                Name = productDto.Name,
                Price = productDto.Price,
                ImgUrl = productDto.ImgUrl,
                Quantity = productDto.Quantity,
                CategoryType = productDto.CategoryType.AsEntity(),
            };
        }

        public static ProductDto AsDto(this AddProductDto productDto)
        {
            return new ProductDto()
            {
                Name = productDto.Name,
                Price = productDto.Price,
                ImgUrl = productDto.ImgUrl,
                Quantity = productDto.Quantity,
            };
        }

        public static ProductDto AsDto(this EditProductDto productDto)
        {
            return new ProductDto()
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Price = productDto.Price,
                ImgUrl = productDto.ImgUrl,
                Quantity = productDto.Quantity,
            };
        }

        public static CategoryDto AsDto(this AddCategoryDto categoryDto)
        {
            return new CategoryDto()
            {
                Name = categoryDto.Name,
                Description = categoryDto.Description,
            };
        }

        public static Category AsEntity(this EditCategoryDto categoryDto)
        {
            return new Category()
            {
                Id = categoryDto.Id,
                Name = categoryDto.Name,
                Description = categoryDto.Description,
            };
        }
    }
}
