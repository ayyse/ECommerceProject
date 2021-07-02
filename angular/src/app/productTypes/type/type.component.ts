import { Component, OnInit } from '@angular/core';
import { ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { EditTypeComponent } from '../edit-type/edit-type.component';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  types: ProductTypeDto[] = []
  type: ProductTypeDto = new ProductTypeDto()

  constructor(
    private typeService: ProductTypeServiceProxy,
    private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getAllTypes()
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(response => {
      this.types = response
    })
  }

  deleteType(){
    this.typeService.delete(this.type.id).subscribe(() => {
      this.types.slice(this.type.id)
      this.getAllTypes()
    })
  }

  createTypeModal(): void {
    this.showCreateOrEditTypeModal();
  }

  editTypeModal(): void {
    this.showCreateOrEditTypeModal(this.type.id);
  }

  showCreateOrEditTypeModal(id?: number): void {
    let createOrEditTypeModal: BsModalRef;
    if (!id) {
      createOrEditTypeModal = this._modalService.show(
        CreateTypeComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditTypeModal = this._modalService.show(
        EditTypeComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditTypeModal.content.onSave.subscribe(() => {
      this.getAllTypes();
    });
  }

}
