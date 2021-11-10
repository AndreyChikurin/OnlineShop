namespace Filtering
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class ProductFilter
    {
        [Required]
        public int QuantityPerPage { get; set; }

        [Required]
        public int PageNumber { get; set; }

        public string Filter { get; set; } = null;

        public Guid CategoryId { get; set; } = Guid.Empty;
    }
}
