import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

import { PagenotfoundComponent } from './Presentation/Modules/pagenotfound/pagenotfound.component';

import { SupplierComponent } from './Presentation/Modules/supplier/supplier.component';
// import { HomeComponent } from './home/home.component';
import { HomeComponent } from './Presentation/Modules/home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './Presentation/Modules/supplier/billing/billing.component';
import { ReportComponent } from './Presentation/Modules/report/report.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Presentation/Modules/login/login.component';
import { EditdetailsComponent } from './Presentation/Modules/editdetails/editdetails.component';
import { SupplierinterceptorInterceptor } from './Core/Interceptor/supplierinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditComponent,
    DetailsComponent,
    PagenotfoundComponent,
    //EditdetailsComponent,
    // LoginComponent,
    
  ],
  imports: [
   
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:SupplierinterceptorInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
