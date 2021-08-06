using Abp.Domain.Entities.Caching;
using eCommerceProject.BasketItems.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public interface IBasketItemCache : IMultiTenancyEntityCache<BasketItemDto>
    {
    }
}
