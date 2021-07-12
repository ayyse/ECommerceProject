import { Component, OnInit } from '@angular/core';
import { ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  types: ProductTypeDto[] = []

  constructor(private typeService: ProductTypeServiceProxy) { }

  ngOnInit(): void {
    this.getAllTypes()
  }

  getAllTypes() {
    this.typeService.getAllTypes().subscribe(response => {
      this.types = response
      console.log(this.types)
    })
  }

}
