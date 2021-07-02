import { ProductBrandDto, ProductBrandServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { CreateBrandComponent } from '../create-brand/create-brand.component';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: ProductBrandDto[] = []
  brand: ProductBrandDto = new ProductBrandDto()

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

  deleteBrand(){
    this.brandService.delete(this.brand.id).subscribe(() => {
      this.brands.slice(this.brand.id)
      this.getAllBrands()
    })
  }

  createBrandModal(): void {
    this.showCreateOrEditBrandModal();
  }

  editBrandModal(): void {
    this.showCreateOrEditBrandModal(this.brand.id);
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
