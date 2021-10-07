namespace Application.DTO.Request
{
    using System;

    public class EditCategoryDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
