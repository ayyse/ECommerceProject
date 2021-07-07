using Abp.Domain.Entities;

namespace eCommerceProject.DbModels
{
    public class BasketItem : Entity<int>
    {
        public int Quantity { get; set; }
        public string ProductName { get; set; }
        public string PictureUrl { get; set; }
        public decimal Price { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
    }
}
