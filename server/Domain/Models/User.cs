namespace Domain.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class User
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        [MinLength(6)]
        public string Password { get; set; }

        public string Role { get; set; }
    }
}