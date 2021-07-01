using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductBrands.Dto
{
    [AutoMapFrom(typeof(ProductBrand))]
    [AutoMapTo(typeof(ProductBrand))]
    public class ProductBrandDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
