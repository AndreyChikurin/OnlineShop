namespace Filtering
{
    using System;

    public class ProductFilter
    {
        public int QuantityPerPage { get; set; } = int.MaxValue;

        public int PageNumber { get; set; } = 0;

        public int PriceIsMore { get; set; } = 0;

        public int PriceIsLess { get; set; } = int.MaxValue;

        public string Filter { get; set; } = null;

        public Guid CategoryId { get; set; }
    }
}
