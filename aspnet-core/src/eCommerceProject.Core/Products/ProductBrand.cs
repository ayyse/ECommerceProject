using Abp.Domain.Entities;
using System.Collections.Generic;

namespace eCommerceApp.Products
{
    public class ProductBrand : Entity<int>
    {
        public string Name { get; set; }
    }
}