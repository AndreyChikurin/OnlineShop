namespace Application.ViewModels
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class CategoryDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
