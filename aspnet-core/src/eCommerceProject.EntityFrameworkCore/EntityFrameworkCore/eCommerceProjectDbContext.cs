using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using eCommerceProject.Authorization.Roles;
using eCommerceProject.Authorization.Users;
using eCommerceProject.MultiTenancy;
using eCommerceProject.Products;

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
        public virtual DbSet<ProductType> ProductTypes { get; set; }
    }
}
