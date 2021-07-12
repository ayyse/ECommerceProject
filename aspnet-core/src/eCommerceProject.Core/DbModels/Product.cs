using Abp.Domain.Entities;

namespace eCommerceProject.DbModels
{
    public class Product : Entity<int>
    {
        public int ProductTypeId { get; set; }
        public ProductType ProductTypeFk { get; set; }
        

        public int ProductBrandId { get; set; }
        public ProductBrand ProductBrandFk { get; set; }

        public int? ProductColorId { get; set; }
        public ProductColor ProductColorFk { get; set; }


        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public decimal ShipmentPrice { get; set; }
        public int StockQuantity { get; set; }
    }
}
