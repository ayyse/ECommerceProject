using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.Products;
using eCommerceProject.ProductTypes.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductTypes
{
    public class ProductTypeAppService : AsyncCrudAppService<ProductType, ProductTypeDto, int>, IProductTypeAppService
    {
        private readonly IRepository<ProductType, int> _typeRepository;
        private readonly IObjectMapper _mapper;

        public ProductTypeAppService(IRepository<ProductType, int> typeRepository, IObjectMapper mapper) : base(typeRepository)
        {
            _typeRepository = typeRepository;
            _mapper = mapper;
        }
    }
}
