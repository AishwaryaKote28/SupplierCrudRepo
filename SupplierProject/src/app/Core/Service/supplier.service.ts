import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SupplierModel } from '../Model/suppliermodel';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) { }

  PostSupplier(data: SupplierModel): Observable<SupplierModel[]> {
    return this.http.post<SupplierModel[]>('https://localhost:44325/api/Supplier/AddSupplier', data)
  }

  GetSupplier(): Observable<SupplierModel[]> {
    return this.http.get<SupplierModel[]>('https://localhost:44325/api/Supplier/GetSupplier')
  }
  GetSupplierById(supplierId: number): Observable<SupplierModel[]> {
    let params = new HttpParams();
    params = params.append('supplierId', supplierId);
    return this.http.get<SupplierModel[]>('https://localhost:44325/api/Supplier/GetSupplierById', { params: params })
  }
  UpdateSupplier(data: SupplierModel): Observable<SupplierModel[]> {
    return this.http.put<SupplierModel[]>('https://localhost:44325/api/Supplier/UpdateSupplier', data)
  }
  DeleteSupplier(supplierId: number): Observable<SupplierModel> {
    let params = new HttpParams();
    params = params.append('supplierId', supplierId);
    return this.http.delete<SupplierModel>('https://localhost::44325/api/Supplier/DeleteSupplier', { params: params });
  }
}

