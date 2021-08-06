using Abp.Application.Services;
using Abp.Dependency;
using Abp.Runtime.Caching;
using eCommerceProject.BasketItems.Dto;
using eCommerceProject.DbModels;
using eCommerceProject.Products.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public class BasketItemAppService : IBasketItemAppService, ITransientDependency
    {

        private readonly IBasketItemCache _basketCache;
        private readonly ICacheManager _cacheManager;


        public BasketItemAppService(IBasketItemCache basketCache, ICacheManager cacheManager)
        {
            _basketCache = basketCache;
            _cacheManager = cacheManager;
        }

        public async Task<BasketItemDto> GetItem(int id)
        {
            //Try to get from cache
            return _cacheManager
                .GetCache("MyCache")
                .Get(id.ToString(), factory => GetFromDatabase(id)) as BasketItemDto;
        }

        public BasketItemDto GetFromDatabase(int id)
        {
            return null;
        }

        //public async Task<List<BasketItem>> GetItem(int id)
        //{
        //    await _cacheManager
        //            .GetCache("MyCache")
        //            .SetAsync("", await NewMethod(id));


        //    //Try to get from cache
        //    var s = await _cacheManager
        //            .GetCache("MyCache")
        //            .GetAsync("",  () => NewMethod(6));
        //    return null;

        //}

        //public async Task<List<BasketItem>> NewMethod(int id)
        //{

        //     return  null;
        //}
    }
}
