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

        public int PriceIsMore { get; set; } = 0;

        public int PriceIsLess { get; set; } = int.MaxValue;

        public string Filter { get; set; } = null;

        public Guid CategoryId { get; set; }
    }
}
