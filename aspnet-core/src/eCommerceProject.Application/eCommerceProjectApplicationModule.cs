using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using eCommerceProject.Authorization;
using System;

namespace eCommerceProject
{
    [DependsOn(
        typeof(eCommerceProjectCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class eCommerceProjectApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<eCommerceProjectAuthorizationProvider>();


            // for basket configuration operation
            Configuration.Caching.Configure("MyCache", cache =>
            {
                cache.DefaultSlidingExpireTime = TimeSpan.FromDays(30);
            });

           
 
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(eCommerceProjectApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
