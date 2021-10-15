namespace Domain.Models
{
    using System;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Product
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        public string ImgUrl { get; set; }

        public int Quantity { get; set; }

        public Category CategoryType { get; set; }
    }
}
