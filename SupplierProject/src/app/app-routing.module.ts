
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { EditdetailsComponent } from './Presentation/Modules/editdetails/editdetails.component';
import { PagenotfoundComponent } from './Presentation/Modules/pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"",
    component:UsersComponent
    
    
  },
  {
    path:"users",
    component:UsersComponent
  },

{
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"details",
    component:DetailsComponent
  },
  {
    path: 'login',loadChildren:()=> import('./Presentation/Modules/login/login.module').then(s=>s.LoginModule)

  },
  // {
  
  //     path:"editdetails/:supplierId",
  //     component:EditdetailsComponent
    
  // },
  //   path:"report",
  //   component:ReportComponent
  // },
  {
    path: 'home',loadChildren:()=> import('./Presentation/Modules/home/home.module').then(s=>s.HomeModule)
  },  
  {
    path: 'parent',loadChildren:()=> import('./parent/parent.module').then(p=>p.ParentModule)
  },
  // {
  //   path:"editdetails/:supplierId",
  //   component:EditdetailsComponent
  // },
 {
   path:"**",
   component:PagenotfoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
