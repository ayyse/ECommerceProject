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

  deleteProduct(product : ProductDto){
    this.productService.delete(product.id).subscribe(() => {
      this.products.slice(product.id)
      this.getAllProducts()
    })
  }

  createProductModal(): void {
    this.showCreateOrEditProductModal();
  }

  editProductModal(product: ProductDto): void {
    this.showCreateOrEditProductModal(product.id);
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
