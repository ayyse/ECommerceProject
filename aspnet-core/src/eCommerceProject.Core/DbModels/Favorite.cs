using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.DbModels
{
    public class Favorite : Entity<int>, IMustHaveTenant
    {
        public int Quantity { get; set; }

        public int TenantId { get; set; }


        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public decimal ShipmentPrice { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
    }
}
