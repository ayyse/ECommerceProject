import { ProductColorDto, ProductColorServiceProxy } from '@shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: ProductColorDto[] = []
  color: ProductColorDto = new ProductColorDto()

  constructor(
    private colorService: ProductColorServiceProxy) { }

  ngOnInit(): void {
    this.getAllColors()
  }

  getAllColors(){
    this.colorService.getAllColors().subscribe(response => {
      this.colors = response
    })
  }

  deleteColor(colorId: number){
    this.colorService.delete(colorId).subscribe(() => {
      this.colors.slice(colorId)
    })
  }

}
