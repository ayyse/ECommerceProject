using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.Products;
using eCommerceProject.ProductTypes.Dto;
using Microsoft.EntityFrameworkCore;
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

        public async Task<List<ProductTypeDto>> GetAllTypesAsync()
        {
            var typeList = await _typeRepository.GetAll().ToListAsync();
            return _mapper.Map<List<ProductTypeDto>>(typeList);
        }

        public async Task<ProductTypeDto> GetTypeAsync(ProductTypeDto input)
        {
            var type = await _typeRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            return _mapper.Map<ProductTypeDto>(type);
        }
    }
}
