import { BasketItemServiceProxy } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { BasketItemDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  basketCount: number


  constructor(private basketService: BasketItemServiceProxy) {
    this.basketService.basketCount().subscribe(
      (count: number) => this.basketCount = count
    );
  }

  ngOnInit(): void {
  }



}
