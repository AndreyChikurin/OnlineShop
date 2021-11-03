namespace Application.DTO.Request
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class EditCategoryDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
