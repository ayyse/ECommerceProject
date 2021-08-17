using Abp.Application.Services;
using Abp.Dependency;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using Abp.Runtime.Caching;
using eCommerceProject.BasketItems.Dto;
using eCommerceProject.DbModels;
using eCommerceProject.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public class BasketItemAppService : AsyncCrudAppService<BasketItem, BasketItemDto, int>, IBasketItemAppService, ITransientDependency
    {

        private readonly IBasketItemCache _basketCache;
        private readonly ICacheManager _cacheManager;
        private readonly IRepository<BasketItem, int> _basketRepository;
        private readonly IRepository<Product, int> _productRepository;
        private readonly IObjectMapper _mapper;

        public BasketItemAppService(
            IRepository<BasketItem, int> basketRepository,
            IRepository<Product, int> productRepository,
            IBasketItemCache basketCache, 
            ICacheManager cacheManager, 
            IObjectMapper mapper) 
            : base(basketRepository)
        {
            _basketCache = basketCache;
            _cacheManager = cacheManager;
            _basketRepository = basketRepository;
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public List<BasketItemDto> GetItem(int id)
        {
            //Try to get from cache
            return _cacheManager
                .GetCache("MyCache")
                .Get(id.ToString(), factory => GetFromDatabase(id)) as List<BasketItemDto>;
        }

        public BasketItemDto GetFromDatabase(int id)
        {
            return _basketCache.Get(id);
        }


        public async Task<BasketItemDto> AddOrUpdateToBasketAsync(BasketItemDto input, int id)
        {
            var selectedProduct = _productRepository.FirstOrDefault(x => x.Id == id);

            input.Name = selectedProduct.Name;
            input.Description = selectedProduct.Description;
            input.ImageUrl = selectedProduct.ImageUrl;
            input.Price = selectedProduct.Price;
            input.ShipmentPrice = selectedProduct.ShipmentPrice;
            input.ProductBrandId = selectedProduct.ProductBrandId;
            input.ProductColorId = selectedProduct.ProductColorId;
            input.ProductTypeId = selectedProduct.ProductTypeId;
            input.Quantity = 1;

            var addedItem = _mapper.Map<BasketItem>(input);
            var addItemToBasket = await _basketRepository.InsertAsync(addedItem);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<BasketItemDto>(addItemToBasket);
        }

        public async Task<int> BasketCountAsync()
        {
            var basketCount = await _basketRepository.CountAsync();
            return basketCount;
        }

    }
}
