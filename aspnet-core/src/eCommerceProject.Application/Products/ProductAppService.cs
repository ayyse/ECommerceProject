﻿using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.Authorization;
using eCommerceProject.Products;
using eCommerceProject.Products.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.Products
{
    [AbpAuthorize(PermissionNames.Pages_Products)]
    public class ProductAppService : AsyncCrudAppService<Product, ProductDto, int>, IProductAppService
    {
        private readonly IRepository<Product, int> _productRepository;
        private readonly IObjectMapper _mapper;

        public ProductAppService(IRepository<Product, int> productRepository, IObjectMapper mapper) : base(productRepository)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public override async Task<ProductDto> CreateAsync(ProductDto input)
        {
            var product = _mapper.Map<Product>(input);
            var createdProduct = await _productRepository.InsertAsync(product);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductDto>(createdProduct);
        }

        public override async Task<ProductDto> UpdateAsync(ProductDto input)
        {
            var product = _mapper.Map<Product>(input);
            var updatedProduct = await _productRepository.UpdateAsync(product);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductDto>(updatedProduct);
        }

        public override async Task DeleteAsync(EntityDto<int> input)
        {
            var deletedProduct = await _productRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            await _productRepository.DeleteAsync(deletedProduct);
        }

        public async Task<List<ProductDto>> getAllProductsAsync()
        {
            var productList = await _productRepository.GetAll().ToListAsync();
            return _mapper.Map<List<ProductDto>>(productList);
        }

        public async Task<ProductDto> GetProductAsync(ProductDto input)
        {
            var product = await _productRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            return _mapper.Map<ProductDto>(product); 
        }

        public async Task<List<ProductDto>> getAllProductsByBrandAsync(int brandId)
        {
            var productsByBrand = await _productRepository.GetAll().Where(x => x.ProductBrandId == brandId).ToListAsync();
            return _mapper.Map<List<ProductDto>>(productsByBrand);
        }

        public async Task<List<ProductDto>> getAllProductsByTypeAsync(int typeId)
        {
            var productsByType = await _productRepository.GetAll().Where(x => x.ProductTypeId == typeId).ToListAsync();
            return _mapper.Map<List<ProductDto>>(productsByType);
        }
    }
}
