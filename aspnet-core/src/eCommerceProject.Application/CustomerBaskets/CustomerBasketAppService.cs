using Abp.ObjectMapping;
using eCommerceProject.BasketItems.Dto;
using eCommerceProject.CustomerBaskets.Dto;
using eCommerceProject.DbModels;
using eCommerceProject.EntityFrameworkCore.Repositories;
using eCommerceProject.Products.Dto;
using System;
using System.Threading.Tasks;

namespace eCommerceProject.CustomerBaskets
{
    public class CustomerBasketAppService : eCommerceProjectAppServiceBase, ICustomerBasketAppService
    {
        private readonly ICustomerBasketRepository _basketRepository;
        private readonly IObjectMapper _mapper;

        public CustomerBasketAppService(ICustomerBasketRepository basketRepository, IObjectMapper mapper)
        {
            _basketRepository = basketRepository;
            _mapper = mapper;
        }

        public async Task DeleteAsync(string basketId)
        {
            await _basketRepository.DeleteBasketAsync(basketId);
        }

        public async Task<CustomerBasketDto> GetBasketAsync(string basketId)
        {
            var basket = await _basketRepository.GetBasketAsync(basketId);
            return _mapper.Map<CustomerBasketDto>(basket);
        }

        public async Task<CustomerBasketDto> UpdateAsync(CustomerBasketDto input)
        {
            var basket = _mapper.Map<CustomerBasket>(input);
            var updatedBasket = await _basketRepository.UpdateBasketAsync(basket);
            return _mapper.Map<CustomerBasketDto>(updatedBasket);
        }
    }
}
