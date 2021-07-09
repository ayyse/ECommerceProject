
using eCommerceProject.CustomerBaskets.Dto;
using System.Threading.Tasks;

namespace eCommerceProject.Interfaces
{
    public interface ICustomerBasketRepository
    {
        public Task<CustomerBasketDto> GetBasketAsync(string basketId);
        public Task<CustomerBasketDto> UpdateBasketAsync(CustomerBasketDto basket);
        public Task<bool> DeleteBasketAsync(string basketId);
    }
}
