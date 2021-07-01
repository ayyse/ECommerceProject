using Abp.Domain.Entities;
using System.Collections.Generic;

namespace eCommerceProject.Products
{
    public class ProductType : Entity<int>
    {
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
