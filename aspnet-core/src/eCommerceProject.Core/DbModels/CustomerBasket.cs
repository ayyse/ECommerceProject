using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.DbModels
{
    public class CustomerBasket : Entity<int>
    {
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}
