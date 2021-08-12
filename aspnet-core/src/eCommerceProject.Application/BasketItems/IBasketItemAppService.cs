using Abp.Application.Services;
using eCommerceProject.BasketItems.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public interface IBasketItemAppService : IAsyncCrudAppService<BasketItemDto, string>
    {
        public BasketItemDto GetItem(string id);
        public BasketItemDto GetFromDatabase(string id);
        public Task<BasketItemDto> AddOrUpdateToBasketAsync(BasketItemDto input, int id);
        public Task<int> BasketCountAsync();
    }
}
