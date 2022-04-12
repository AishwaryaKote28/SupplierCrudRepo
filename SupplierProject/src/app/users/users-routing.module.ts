import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { EditComponent } from '../edit/edit.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{
  path:'',
  component:UsersComponent
},
{
  path:'edit',
  component:EditComponent

}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
