import { EditBrandComponent } from './../edit-brand/edit-brand.component';
import { CreateBrandComponent } from './../create-brand/create-brand.component';
import { ProductBrandDto, ProductBrandServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {

  brand : ProductBrandDto = new ProductBrandDto()
  brands: ProductBrandDto[] = []


  constructor(
    private brandService: ProductBrandServiceProxy,
    private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllBrands()
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response
    })
  }

  deleteBrand(brand : ProductBrandDto){
    this.brandService.delete(brand.id).subscribe()
  }

  createBrandModal(): void {
    this.showCreateOrEditBrandModal();
  }

  editBrandModal(tenant: ProductBrandDto): void {
    this.showCreateOrEditBrandModal(tenant.id);
  }

  showCreateOrEditBrandModal(id?: number): void {
    let createOrEditBrandModal: BsModalRef;
    if (!id) {
      createOrEditBrandModal = this._modalService.show(
        CreateBrandComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditBrandModal = this._modalService.show(
        EditBrandComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditBrandModal.content.onSave.subscribe(() => {
      this.getAllBrands();
    });
  }

}
