using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.DbModels;

namespace eCommerceProject.Products.Dto
{
    [AutoMapFrom(typeof(Product))]
    [AutoMapTo(typeof(Product))]
    public class ProductDto : EntityDto<int>
    {
        public int ProductTypeId { get; set; }
        public int ProductBrandId { get; set; }


        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public decimal ShipmentPrice { get; set; }
    }
}
