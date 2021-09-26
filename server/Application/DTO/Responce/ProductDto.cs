namespace Application.ViewModels
{
    using System;

    public class ProductDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Img { get; set; }

        public int Quantity { get; set; }

        public CategoryDto CategoryType { get; set; }
    }
}
