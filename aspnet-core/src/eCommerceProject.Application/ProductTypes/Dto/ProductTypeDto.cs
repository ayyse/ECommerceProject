using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using eCommerceProject.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceProject.ProductTypes.Dto
{
    [AutoMapFrom(typeof(ProductType))]
    [AutoMapTo(typeof(ProductType))]
    public class ProductTypeDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
