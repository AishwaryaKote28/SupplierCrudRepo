import { TestBed } from '@angular/core/testing';

import { SupplierinterceptorInterceptor } from './supplierinterceptor.interceptor';

describe('SupplierinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SupplierinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SupplierinterceptorInterceptor = TestBed.inject(SupplierinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
