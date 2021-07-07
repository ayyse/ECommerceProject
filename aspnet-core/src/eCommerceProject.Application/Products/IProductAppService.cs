using Abp.Application.Services;
using eCommerceProject.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.Products
{
    public interface IProductAppService : IAsyncCrudAppService<ProductDto, int>
    {
        public Task<List<ProductDto>> GetAllProductsAsync();
        public Task<ProductDto> GetProductAsync(int productId);
        public Task<List<ProductDto>> GetAllProductsByBrandAsync(int brandId);
        public Task<List<ProductDto>> GetAllProductsByTypeAsync(int typeId);
    }
}
