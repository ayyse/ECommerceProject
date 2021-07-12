using Abp.Domain.Entities;
using System.Collections.Generic;

namespace eCommerceProject.DbModels
{
    public class ProductType : Entity<int>
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
