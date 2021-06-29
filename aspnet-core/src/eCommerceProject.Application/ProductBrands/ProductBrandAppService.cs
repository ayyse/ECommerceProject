using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceApp.ProductBrands.Dto;
using eCommerceApp.Products;
using eCommerceProject.Authorization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductBrands
{
    [AbpAuthorize(PermissionNames.Pages_ProductBrands)]
    public class ProductBrandAppService : AsyncCrudAppService<ProductBrand, ProductBrandDto, int>, IProductBrandAppService
    {
        private readonly IRepository<ProductBrand, int> _brandRepository;
        private readonly IObjectMapper _mapper;

        public ProductBrandAppService(IRepository<ProductBrand, int> brandRepository, IObjectMapper mapper) : base(brandRepository)
        {
            _brandRepository = brandRepository;
            _mapper = mapper;
        }

        public override async Task<ProductBrandDto> CreateAsync(ProductBrandDto input)
        {
            var brand = _mapper.Map<ProductBrand>(input);
            var createdBrand = await _brandRepository.InsertAsync(brand);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductBrandDto>(createdBrand);
        }

        public override async Task<ProductBrandDto> UpdateAsync(ProductBrandDto input)
        {
            var brand = _mapper.Map<ProductBrand>(input);
            var updatedBrand = await _brandRepository.UpdateAsync(brand);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductBrandDto>(updatedBrand);
        }

        public override async Task DeleteAsync(EntityDto<int> input)
        {
            var deletedBrand = await _brandRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            await _brandRepository.DeleteAsync(deletedBrand);
        }

        public async Task<List<ProductBrandDto>> getAllBrandsAsync()
        {
            var brandList = await _brandRepository.GetAll().ToListAsync();
            return _mapper.Map<List<ProductBrandDto>>(brandList);
        }
    }
}
