import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ParentComponent } from './parent.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
//import { ParentComponent } from './parent.component';


@NgModule({
  declarations: [
    ParentComponent,
    Form1Component,
    Form2Component,
    List1Component,
    List2Component
  ],
  imports:[
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
