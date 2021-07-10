using eCommerceProject.DbModels;
using System.Threading.Tasks;

namespace eCommerceProject.EntityFrameworkCore.Repositories
{
    public interface ICustomerBasketRepository
    {
        public Task<CustomerBasket> GetBasketAsync(string basketId);
        public Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket);
        public Task<bool> DeleteBasketAsync(string basketId);
    }
}
