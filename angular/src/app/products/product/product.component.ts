import { EditProductComponent } from './../edit-product/edit-product.component';
import { CreateProductComponent } from './../create-product/create-product.component';
import { Component, OnInit } from '@angular/core';
import { ProductDto, ProductServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : ProductDto = new ProductDto()
  products: ProductDto[] = []


  constructor(
    private productService: ProductServiceProxy,
    private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
      console.log(this.products)
    })
  }

  deleteProduct(id : number){
    this.productService.delete(id).subscribe(() => {
      this.getAllProducts()
    })
  }

  createProductModal(): void {
    this.showCreateOrEditProductModal();
  }

  editProductModal(tenant: ProductDto): void {
    this.showCreateOrEditProductModal(tenant.id);
  }

  showCreateOrEditProductModal(id?: number): void {
    let createOrEditTenantDialog: BsModalRef;
    if (!id) {
      createOrEditTenantDialog = this._modalService.show(
        CreateProductComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditTenantDialog = this._modalService.show(
        EditProductComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditTenantDialog.content.onSave.subscribe(() => {
      this.getAllProducts();
    });
  }

}
