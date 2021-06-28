using Abp.Application.Services;
using eCommerceApp.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceApp.Products
{
    public interface IProductAppService : IAsyncCrudAppService<ProductDto, int>
    {
        public Task<List<ProductDto>> getAllProductsAsync();
        public Task<List<ProductDto>> getAllProductsByBrandAsync(int brandId);
        public Task<List<ProductDto>> getAllProductsByTypeAsync(int typeId);
    }
}
