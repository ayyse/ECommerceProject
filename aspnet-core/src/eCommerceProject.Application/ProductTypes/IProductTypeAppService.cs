using Abp.Application.Services;
using eCommerceProject.ProductTypes.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductTypes
{
    public interface IProductTypeAppService : IAsyncCrudAppService<ProductTypeDto, int>
    {
        public Task<List<ProductTypeDto>> GetAllTypesAsync();
        public Task<ProductTypeDto> GetTypeAsync(ProductTypeDto input);
    }
}
