import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { ParentComponent } from './parent.component';
import { List1Component } from './list1/list1.component';


const routes: Routes = [
  { 
    path:'',
    component:ParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
