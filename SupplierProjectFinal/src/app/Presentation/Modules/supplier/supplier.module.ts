import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier.component';
import { ProductComponent } from './product/product.component';
import { ReportComponent } from '../report/report.component';

@NgModule({
  declarations: [
    BillingComponent,
    SupplierComponent,
    ProductComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
     SupplierRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
    
  ]
})
export class SupplierModule { }
