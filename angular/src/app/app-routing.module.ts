import { CustomerHomeComponent } from './customer-components/customer-home/customer-home.component';
import { CommonModule } from '@angular/common';
import { TypeComponent } from './productTypes/type/type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ProductComponent } from './products/product/product.component';
import { BrandComponent } from './productBrands/brand/brand.component';
import { ColorComponent } from './productColors/color/color.component';
import { CustomerProductsComponent } from './customer-components/customer-products/customer-products.component';
import { CustomerProductDetailsComponent } from './customer-components/customer-product-details/customer-product-details.component';
import { CustomerAppComponent } from './customer-layout/customer-app/customer-app.component';
import { CustomerBasketComponent } from './customer-components/customer-basket/customer-basket.component';
import { CustomerFavoritesComponent } from './customer-components/customer-favorites/customer-favorites.component';
import { CustomerProfileComponent } from './customer-components/customer-profile/customer-profile.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CustomerAppComponent,
                children: [
                    { path: 'customerhome', component: CustomerHomeComponent },
                    { path: 'customerproducts', component: CustomerProductsComponent },
                    { path: 'detail/:productId', component: CustomerProductDetailsComponent },
                    { path: 'customerbasket', component: CustomerBasketComponent },
                    { path: 'customerfavorites', component: CustomerFavoritesComponent },
                    { path: 'customerprofile', component: CustomerProfileComponent }
                ]
            }
        ]),
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
                    { path: 'products', component: ProductComponent, canActivate: [AppRouteGuard] },
                    { path: 'brands', component: BrandComponent, canActivate: [AppRouteGuard] },
                    { path: 'types', component: TypeComponent, canActivate: [AppRouteGuard] },
                    { path: 'colors', component: ColorComponent, canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


