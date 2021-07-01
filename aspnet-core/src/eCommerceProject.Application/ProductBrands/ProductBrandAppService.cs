using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.ProductBrands.Dto;
using eCommerceProject.Products;
using eCommerceProject.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductBrands
{
    public class ProductBrandAppService : AsyncCrudAppService<ProductBrand, ProductBrandDto, int>, IProductBrandAppService
    {
        private readonly IRepository<ProductBrand, int> _brandRepository;
        private readonly IObjectMapper _mapper;

        public ProductBrandAppService(IRepository<ProductBrand, int> brandRepository, IObjectMapper mapper) : base(brandRepository)
        {
            _brandRepository = brandRepository;
            _mapper = mapper;
        }
    }
}
