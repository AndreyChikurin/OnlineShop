namespace Application.DTO.Request
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class AddProductDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [Range(1, 100000)]
        public decimal Price { get; set; }

        public string Img { get; set; }

        public string Quantity { get; set; }

        public Guid CategoryTypeqId { get; set; }
    }
}
