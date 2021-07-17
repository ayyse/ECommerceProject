import { CustomerBasketDto, BasketItemDto } from './../../../shared/service-proxies/service-proxies';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductBrandDto, ProductBrandServiceProxy, ProductColorDto, ProductColorServiceProxy, ProductDto, ProductServiceProxy, ProductTypeDto, ProductTypeServiceProxy } from '@shared/service-proxies/service-proxies';


@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css']
})
export class CustomerProductsComponent implements OnInit {

  products: ProductDto[] = []
  brands: ProductBrandDto[] = []
  types: ProductTypeDto[] = []
  colors: ProductColorDto[] = []

  product: ProductDto = new ProductDto()
  type: ProductTypeDto = new ProductTypeDto()

  item: BasketItemDto = new BasketItemDto()
  basketList: BasketItemDto[] = []

  @Output() changeClap = new EventEmitter();

  constructor(
    private productService: ProductServiceProxy,
    private brandService: ProductBrandServiceProxy,
    private typeService: ProductTypeServiceProxy,
    private colorService: ProductColorServiceProxy) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllBrands()
    this.getAllTypes()
    this.getAllColors()
  }

  addProductBasket(item: BasketItemDto) {
    this.addToitem(item);
    this.changeClap.emit();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
    })
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response
    })
  }

  getAllTypes() {
    this.typeService.getAllTypes().subscribe(response => {
      this.types = response
    })
  }

  getAllColors() {
    this.colorService.getAllColors().subscribe(response => {
      this.colors = response
    })
  }

  getAllProductsByBrandId(productBrandId: number) {
    this.productService.getAllProductsByBrand(productBrandId).subscribe(response => {
      this.products = response
    })
  }

  getAllProductsByTypeId(productTypeId: number) {
    this.productService.getAllProductsByType(productTypeId).subscribe(response => {
      this.products = response
    })
  }

  addToitem(item: BasketItemDto) {
    var productContains = this.basketList.find(x => x.id == item.id)
    if (productContains) {
      productContains.product = this.product
      productContains.quantity += 1
      console.log("if", this.basketList)
    }
    else
      this.item.product = this.product
    this.item.quantity = 1
    this.basketList.push(this.item)
    console.log("else", this.basketList)
  }
}
