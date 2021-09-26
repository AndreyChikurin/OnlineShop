namespace Application.Interfaces
{
    using System.Collections.Generic;
    using Application.ViewModels;

    public interface IProductService
    {
        List<ProductDto> GetProducts();
    }
}
