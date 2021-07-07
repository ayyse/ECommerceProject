import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUserProductComponent } from './detail-user-product.component';

describe('DetailUserProductComponent', () => {
  let component: DetailUserProductComponent;
  let fixture: ComponentFixture<DetailUserProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUserProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
