using Abp.AutoMapper;
using eCommerceProject.DbModels;

namespace eCommerceProject.BasketItems.Dto
{
    [AutoMapFrom(typeof(BasketItem))]
    [AutoMapTo(typeof(Product))]
    public class BasketItemDto
    {
    }
}
