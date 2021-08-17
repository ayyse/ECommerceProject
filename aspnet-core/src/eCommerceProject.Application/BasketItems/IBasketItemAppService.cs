using Abp.Application.Services;
using eCommerceProject.BasketItems.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public interface IBasketItemAppService : IAsyncCrudAppService<BasketItemDto, int>
    {
        public List<BasketItemDto> GetItem(int id);
        public BasketItemDto GetFromDatabase(int id);
        public Task<BasketItemDto> AddOrUpdateToBasketAsync(BasketItemDto input, int id);
        public Task<int> BasketCountAsync();
    }
}
