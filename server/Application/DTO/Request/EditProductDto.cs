namespace Application.DTO.Request
{
    using System;

    public class EditProductDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Img { get; set; }

        public string Quatity { get; set; }

        public Guid CategoryTypeId { get; set; }
    }
}
