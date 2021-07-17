using Abp.Domain.Entities;
using System.Collections.Generic;

namespace eCommerceProject.DbModels
{
    public class BasketItem : Entity<int>, IMustHaveTenant
    {
        public int Quantity { get; set; }
        //public string ProductName { get; set; }
        //public string PictureUrl { get; set; }
        //public decimal Price { get; set; }
        //public decimal ShipmentPrice { get; set; }
        //public string Brand { get; set; }
        //public string Type { get; set; }
        public int TenantId { get; set; }
        public Product Product { get; set; } = new Product();
    }
}
