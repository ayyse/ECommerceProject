using Abp.Dependency;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Caching;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.Runtime.Caching;
using eCommerceProject.BasketItems.Dto;
using eCommerceProject.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.BasketItems
{
    public class BasketItemCache : MayHaveTenantEntityCache<BasketItem, BasketItemDto>, IBasketItemCache, ITransientDependency
    {
        private readonly ICacheManager _cacheManager;
        private readonly IRepository<BasketItem> _repository;
        public BasketItemCache(ICacheManager cacheManager, IUnitOfWorkManager unitOfWorkManager, IRepository<BasketItem> repository)
        : base(cacheManager, unitOfWorkManager, repository)
        {
            _cacheManager = cacheManager;
            _repository = repository;
        }

    }
}
