using eCommerceProject.DbModels;
using StackExchange.Redis;
using System;
using System.Text.Json;
using System.Threading.Tasks;

namespace eCommerceProject.EntityFrameworkCore.Repositories
{
    public class CustomerBasketRepository : ICustomerBasketRepository
    {
        private readonly IDatabase _database;

        public CustomerBasketRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _database.KeyDeleteAsync(basketId);
        }

        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            var basket = await _database.StringGetAsync(basketId);
            return basket.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(basket);
        }

        public async Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket)
        {
            var updated = await _database.StringSetAsync(basket.Id, JsonSerializer.Serialize(basket), TimeSpan.FromDays(30));
            if (!updated)
                return null;
            return await GetBasketAsync(basket.Id);
        }
    }
}
