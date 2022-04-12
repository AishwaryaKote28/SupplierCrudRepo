import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BillingComponent } from '../supplier/billing/billing.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from '../supplier/product/product.component';
import { ReportComponent } from '../report/report.component';
import { EditdetailsComponent } from '../editdetails/editdetails.component';


@NgModule({
  declarations: [
  SupplierComponent,
  BillingComponent,
  ProductComponent,
  ReportComponent,
  EditdetailsComponent
  ],
  imports:[
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, 
      
  ]
})
export class HomeModule { }
