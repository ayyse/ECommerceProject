using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.BasketItems.Dto;
using eCommerceProject.DbModels;
using System.Collections.Generic;

namespace eCommerceProject.CustomerBaskets.Dto
{
    [AutoMapFrom(typeof(CustomerBasket))]
    [AutoMapTo(typeof(CustomerBasket))]
    public class CustomerBasketDto : EntityDto<string>
    {
        public List<BasketItemDto> Items { get; set; } = new List<BasketItemDto>();
    }
}
