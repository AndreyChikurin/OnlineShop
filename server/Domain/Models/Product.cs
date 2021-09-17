namespace Domain.Models
{
    using System;

    public class Product
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Img { get; set; }

        public int Quantity { get; set; }

        public Category CategoryType { get; set; }
    }
}
