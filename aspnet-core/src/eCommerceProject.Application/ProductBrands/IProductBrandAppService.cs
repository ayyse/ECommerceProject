using Abp.Application.Services;
using eCommerceProject.ProductBrands.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductBrands
{
    public interface IProductBrandAppService : IAsyncCrudAppService<ProductBrandDto, int>
    {
    }
}
