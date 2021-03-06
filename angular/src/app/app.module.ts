import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
// customer layout

// admin
import { ProductComponent } from './products/product/product.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { BrandComponent } from './productBrands/brand/brand.component';
import { CreateBrandComponent } from './productBrands/create-brand/create-brand.component';
import { EditBrandComponent } from './productBrands/edit-brand/edit-brand.component';
import { TypeComponent } from './productTypes/type/type.component';
import { CreateTypeComponent } from './productTypes/create-type/create-type.component';
import { EditTypeComponent } from './productTypes/edit-type/edit-type.component';
import { ColorComponent } from './productColors/color/color.component';
// customer
import { CustomerHomeComponent } from './customer-components/customer-home/customer-home.component';
import { CustomerProductsComponent } from './customer-components/customer-products/customer-products.component';
import { CustomerProductDetailsComponent } from './customer-components/customer-product-details/customer-product-details.component';
import { CustomerHeaderComponent } from './customer-layout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer-layout/customer-footer/customer-footer.component';
import { CustomerAppComponent } from './customer-layout/customer-app/customer-app.component';
import { CustomerBasketComponent } from './customer-components/customer-basket/customer-basket.component';
import { CustomerProfileComponent } from './customer-components/customer-profile/customer-profile.component';
import { CustomerFavoritesComponent } from './customer-components/customer-favorites/customer-favorites.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    // admin
    ProductComponent,
    CreateProductComponent,
    EditProductComponent,
    BrandComponent,
    CreateBrandComponent,
    EditBrandComponent,
    TypeComponent,
    CreateTypeComponent,
    EditTypeComponent,
    ColorComponent,
    //customer
    CustomerHomeComponent,
    CustomerProductsComponent,
    CustomerProductDetailsComponent,
    CustomerBasketComponent,
    CustomerProfileComponent,
    CustomerFavoritesComponent,
    // customer layout
    CustomerHeaderComponent,
    CustomerFooterComponent,
    CustomerAppComponent,
    // pipes
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class AppModule {}
