using Abp.Application.Services.Dto;
using eCommerceApp.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerceApp.ProductTypes.Dto
{
    public class ProductTypeDto : EntityDto<int>
    {
        public string Name { get; set; }
    }
}
