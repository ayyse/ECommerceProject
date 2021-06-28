using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using eCommerceProject.Authorization.Roles;
using eCommerceProject.Authorization.Users;
using eCommerceProject.MultiTenancy;

namespace eCommerceProject.EntityFrameworkCore
{
    public class eCommerceProjectDbContext : AbpZeroDbContext<Tenant, Role, User, eCommerceProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public eCommerceProjectDbContext(DbContextOptions<eCommerceProjectDbContext> options)
            : base(options)
        {
        }
    }
}
