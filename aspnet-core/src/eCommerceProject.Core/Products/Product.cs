using Abp.Domain.Entities;

namespace eCommerceProject.Products
{
    public class Product : Entity<int>
    {
        public int ProductTypeId { get; set; }
        public ProductType ProductTypeFk { get; set; }
        


        public int ProductBrandId { get; set; }
        public ProductBrand ProductBrandFk { get; set; }


        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public decimal ShipmentPrice { get; set; }

    }
}
