using Abp.Application.Services;
using eCommerceProject.ProductTypes.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.ProductTypes
{
    public interface IProductTypeAppService : IAsyncCrudAppService<ProductTypeDto, int>
    {
        public Task<List<ProductTypeDto>> GetAllTypesAsync();
        public Task<ProductTypeDto> GetTypeAsync(ProductTypeDto input);
    }
}
