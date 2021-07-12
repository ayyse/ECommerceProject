using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.DbModels;

namespace eCommerceProject.ProductTypes.Dto
{
    [AutoMapFrom(typeof(ProductType))]
    [AutoMapTo(typeof(ProductType))]
    public class ProductTypeDto : EntityDto<int>
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
    }
}
