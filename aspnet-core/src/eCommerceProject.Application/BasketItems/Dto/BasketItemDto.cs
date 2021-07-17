using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using eCommerceProject.DbModels;
using eCommerceProject.Products.Dto;
using System.Collections.Generic;

namespace eCommerceProject.BasketItems.Dto
{
    [AutoMapFrom(typeof(BasketItem))]
    [AutoMapTo(typeof(BasketItem))]
    public class BasketItemDto : EntityDto<int>
    {
        public int Quantity { get; set; }
        public ProductDto Product { get; set; } = new ProductDto();
        //public string ProductName { get; set; }
        //public string PictureUrl { get; set; }
        //public decimal Price { get; set; }
        //public decimal ShipmentPrice { get; set; }
        //public string Brand { get; set; }
        //public string Type { get; set; }
        
    }
}
