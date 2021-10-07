namespace Application.DTO.Request
{
    using System.ComponentModel.DataAnnotations;

    public class AddCategoryDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
