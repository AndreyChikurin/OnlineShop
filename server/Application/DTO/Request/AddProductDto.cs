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

        public string ImgUrl { get; set; }

        [Required]
        [Range(1, 100000)]
        public int Quantity { get; set; }

        public Guid CategoryTypeId { get; set; }
    }
}
