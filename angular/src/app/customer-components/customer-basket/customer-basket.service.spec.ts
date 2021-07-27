import { TestBed } from '@angular/core/testing';

import { CustomerBasketService } from './customer-basket.service';

describe('CustomerBasketService', () => {
  let service: CustomerBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
