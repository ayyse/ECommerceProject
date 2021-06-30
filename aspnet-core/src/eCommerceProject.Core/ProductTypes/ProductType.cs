using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductTypes
{
    public class ProductType : Entity<int>
    {
        public string Name { get; set; }
    }
}
