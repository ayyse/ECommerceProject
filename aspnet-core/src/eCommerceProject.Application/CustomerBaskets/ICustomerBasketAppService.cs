using Abp.Application.Services;
using Abp.Application.Services.Dto;
using eCommerceProject.CustomerBaskets.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.CustomerBaskets
{
    public interface ICustomerBasketAppService
    {
        public Task<CustomerBasketDto> GetBasketAsync(string basketId);
        public Task<CustomerBasketDto> UpdateAsync(CustomerBasketDto input);
        //public Task<CustomerBasketDto> CreateAsync(CustomerBasketDto input);
        public Task DeleteAsync(string basketId);
        //public Task<List<CustomerBasketDto>> GetAllProductsAsync();
    }
}
