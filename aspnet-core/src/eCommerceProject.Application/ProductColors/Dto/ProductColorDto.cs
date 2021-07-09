using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.DbModels;

namespace eCommerceProject.ProductColors.Dto
{
    [AutoMapFrom(typeof(ProductColor))]
    [AutoMapTo(typeof(ProductColor))]
    public class ProductColorDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
