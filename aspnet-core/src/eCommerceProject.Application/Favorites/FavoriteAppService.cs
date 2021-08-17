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
        private readonly IRepository<Product, int> _productRepository;
        private readonly IObjectMapper _mapper;
        public FavoriteAppService(
            IRepository<Favorite, int> favoriteRepository,
            IObjectMapper mapper) : base(favoriteRepository)
        {
            _favoriteRepository = favoriteRepository;
            _mapper = mapper;
        }
        public async Task<List<FavoriteDto>> GetAllFavoritesAsync()
        {
            var favoriteList = await _favoriteRepository.GetAll().ToListAsync();
            return _mapper.Map<List<FavoriteDto>>(favoriteList);
        }

        public async Task<FavoriteDto> AddFavoriteAsync(FavoriteDto input, int id)
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

            var addedItem = _mapper.Map<Favorite>(input);
            var addItemToFavorites = await _favoriteRepository.InsertAsync(addedItem);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<FavoriteDto>(addItemToFavorites);
        }

        public async Task<FavoriteDto> GetFavoriteAsync(int favId)
        {
            var fav = await _favoriteRepository.GetAll()
                .Include(x => x.ProductBrandFk)
                .Include(x => x.ProductTypeFk)
                .Include(x => x.ProductColorFk)
                .FirstOrDefaultAsync(x => x.Id == favId);
            return _mapper.Map<FavoriteDto>(fav);
        }
    }
}
