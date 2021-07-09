using Abp.Application.Services;
using Abp.ObjectMapping;
using eCommerceProject.CustomerBaskets.Dto;
using eCommerceProject.DbModels;
using eCommerceProject.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.CustomerBaskets
{
    public class CustomerBasketAppService : ICustomerBasketAppService
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
            //return _mapper.Map<CustomerBasketDto>(basket);
            return basket;
        }

        public async Task<CustomerBasketDto> UpdateAsync(CustomerBasketDto input)
        {
            var updatedBasket = await _basketRepository.UpdateBasketAsync(input);
            return updatedBasket;
        }
    }
}
