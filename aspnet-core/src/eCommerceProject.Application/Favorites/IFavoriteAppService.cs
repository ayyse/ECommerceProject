using Abp.Application.Services;
using eCommerceProject.Favorites.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.Favorites
{
    public interface IFavoriteAppService : IAsyncCrudAppService<FavoriteDto, int>
    {
        public Task<List<FavoriteDto>> GetAllFavoritesAsync();
        public Task<FavoriteDto> AddFavoriteAsync(FavoriteDto input, int id);
    }
}
