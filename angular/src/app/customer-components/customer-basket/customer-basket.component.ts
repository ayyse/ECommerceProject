import { Component, OnInit } from '@angular/core';
import { BasketItemDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-customer-basket',
  templateUrl: './customer-basket.component.html',
  styleUrls: ['./customer-basket.component.css']
})
export class CustomerBasketComponent implements OnInit {


  basketList: BasketItemDto[] = []

  constructor() { }

  ngOnInit(): void {
  }



}


