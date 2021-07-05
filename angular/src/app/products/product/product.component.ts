import { ProductBrandDto, ProductDto, ProductBrandServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { EditProductComponent } from './../edit-product/edit-product.component';
import { CreateProductComponent } from './../create-product/create-product.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductDto = new ProductDto()
  products: ProductDto[] = []
  brands: ProductBrandDto[] = []

  constructor(
    private productService: ProductServiceProxy,
    private brandService: ProductBrandServiceProxy,
    private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllBrands()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
      console.log(this.products)
    })
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response
    })
  }

  getAllProductsByBrandId(productBrandId: number) {
    this.productService.getAllProductsByBrand(productBrandId).subscribe(response => {
      this.products = response
      console.log(this.products)
    })
  }

  getAllProductsByTypeId(typeId: number) {
    this.productService.getAllProductsByType(typeId).subscribe(response => {
      this.products = response
    })
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe()
  }

  createProductModal(): void {
    this.showCreateOrEditProductModal();
  }

  editProductModal(): void {
    this.showCreateOrEditProductModal(this.product.id);
  }

  showCreateOrEditProductModal(id?: number): void {
    let createOrEditProductModal: BsModalRef;
    if (!id) {
      createOrEditProductModal = this._modalService.show(
        CreateProductComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditProductModal = this._modalService.show(
        EditProductComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditProductModal.content.onSave.subscribe(() => {
      this.getAllProducts();
    });
  }

}
