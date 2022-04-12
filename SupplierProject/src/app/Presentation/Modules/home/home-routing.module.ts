import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from 'src/app/Presentation/Modules/report/report.component';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
children:[
  {
    path:'supplier',
    component:SupplierComponent
  },
  {
      path:'report',
      component:ReportComponent
    },
    {
      path:'editdetails/:supplierId',
      component:EditdetailsComponent
    },    
]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
