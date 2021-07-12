import { CustomerHomeComponent } from './customer-components/customer-home/customer-home.component';
import { CommonModule } from '@angular/common';
import { DetailUserProductComponent } from './userProducts/detail-user-product/detail-user-product.component';
import { UserProductComponent } from './userProducts/user-product/user-product.component';
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

const routes: Routes = [
    { path: 'customerhome', component: CustomerHomeComponent },
    { path: 'detail/:productId', component: DetailUserProductComponent },
    { path: 'shop', component: UserProductComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
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
