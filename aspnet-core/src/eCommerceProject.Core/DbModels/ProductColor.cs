using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.DbModels
{
    public class ProductColor : Entity<int>
    {
        public string Name { get; set; }
    }
}
