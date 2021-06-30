using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace eCommerceProject.ProductTypes.Dto
{
    [AutoMapFrom(typeof(ProductType))]
    [AutoMapTo(typeof(ProductType))]
    public class ProductTypeDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
