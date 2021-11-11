namespace Application.ViewModels
{
    using System.Collections.Generic;

    public class ProductList
    {
        public IEnumerable<ProductDto> ProductsList { get; set; }

        public int TotalItemsCount { get; set; }
    }
}
