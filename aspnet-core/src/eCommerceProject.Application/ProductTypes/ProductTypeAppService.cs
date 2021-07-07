using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.DbModels;
using eCommerceProject.ProductTypes.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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

        public override async Task<ProductTypeDto> CreateAsync(ProductTypeDto input)
        {
            var type = _mapper.Map<ProductType>(input);
            var createdType = await _typeRepository.InsertAsync(type);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductTypeDto>(createdType);
        }

        public override async Task<ProductTypeDto> UpdateAsync(ProductTypeDto input)
        {
            var type = _mapper.Map<ProductType>(input);
            var updatedType = await _typeRepository.UpdateAsync(type);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductTypeDto>(updatedType);
        }

        public override async Task DeleteAsync(EntityDto<int> input)
        {
            var deletedType = await _typeRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            await _typeRepository.DeleteAsync(deletedType);
        }
    }
}
