using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.DbModels;
using eCommerceProject.Favorites.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.Favorites
{
    public class FavoriteAppService : AsyncCrudAppService<Favorite, FavoriteDto, int>, IFavoriteAppService
    {
        private readonly IRepository<Favorite, int> _favoriteRepository;
        private readonly IObjectMapper _mapper;
        public FavoriteAppService(IRepository<Favorite, int> favoriteRepository, IObjectMapper mapper) : base(favoriteRepository)
        {
            _favoriteRepository = favoriteRepository;
            _mapper = mapper;
        }
        public async Task<List<FavoriteDto>> GetAllProductsAsync()
        {
            var favoriteList = await _favoriteRepository.GetAll().ToListAsync();
            return _mapper.Map<List<FavoriteDto>>(favoriteList);
        }
    }
}
