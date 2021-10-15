namespace Application.DTO.Request
{
    using System;

    public class EditProductDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string ImgUrl { get; set; }

        public int Quantity { get; set; }

        public Guid CategoryTypeId { get; set; }
    }
}
