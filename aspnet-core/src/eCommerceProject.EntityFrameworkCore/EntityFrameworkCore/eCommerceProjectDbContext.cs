using Abp.Zero.EntityFrameworkCore;
using eCommerceProject.Authorization.Roles;
using eCommerceProject.Authorization.Users;
using eCommerceProject.DbModels;
using eCommerceProject.MultiTenancy;
using Microsoft.EntityFrameworkCore;

namespace eCommerceProject.EntityFrameworkCore
{
    public class eCommerceProjectDbContext : AbpZeroDbContext<Tenant, Role, User, eCommerceProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public eCommerceProjectDbContext(DbContextOptions<eCommerceProjectDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductBrand> ProductBrands { get; set; }
        public virtual DbSet<ProductColor> ProductColors { get; set; }
        public virtual DbSet<ProductType> ProductTypes { get; set; }
        public virtual DbSet<BasketItem> BasketItems { get; set; }
        public virtual DbSet<Favorite> Favorites { get; set; }
        
    }
}
