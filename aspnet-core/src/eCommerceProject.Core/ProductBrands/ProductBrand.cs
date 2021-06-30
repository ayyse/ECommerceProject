using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductBrands
{
    public class ProductBrand : Entity<int>
    {
        public string Name { get; set; }
    }
}
