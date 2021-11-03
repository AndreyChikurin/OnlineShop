namespace Application.DTO.Request
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class EditProductDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string ImgUrl { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public Guid CategoryTypeId { get; set; }
    }
}
