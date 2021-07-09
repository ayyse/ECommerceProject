using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using eCommerceProject.DbModels;
using eCommerceProject.ProductColors.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eCommerceProject.ProductColors
{
    public class ProductColorAppService : AsyncCrudAppService<ProductColor, ProductColorDto, int>, IProductColorAppService
    {
        private readonly IRepository<ProductColor, int> _colorRepository;
        private readonly IObjectMapper _mapper;
        public ProductColorAppService(IRepository<ProductColor, int> colorRepository, IObjectMapper mapper) : base(colorRepository)
        {
            _colorRepository = colorRepository;
            _mapper = mapper;
        }

        public async Task<List<ProductColorDto>> GetAllColorsAsync()
        {
            var colorList = await _colorRepository.GetAll().ToListAsync();
            return _mapper.Map<List<ProductColorDto>>(colorList);
        }

        public override async Task<ProductColorDto> CreateAsync(ProductColorDto input)
        {
            var color = _mapper.Map<ProductColor>(input);
            var createdColor = await _colorRepository.InsertAsync(color);
            await CurrentUnitOfWork.SaveChangesAsync();
            return _mapper.Map<ProductColorDto>(createdColor);
        }

        public override async Task DeleteAsync(EntityDto<int> input)
        {
            var deletedColor = await _colorRepository.FirstOrDefaultAsync(x => x.Id == input.Id);
            await _colorRepository.DeleteAsync(deletedColor);
        }
    }
}
