using Abp.Application.Services;
using eCommerceProject.ProductColors.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.ProductColors
{
    public interface IProductColorAppService : IAsyncCrudAppService<ProductColorDto, int>
    {
        public Task<List<ProductColorDto>> GetAllColorsAsync();
    }
}
