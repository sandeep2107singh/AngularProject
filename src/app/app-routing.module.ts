import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch: "full"
  },

 {
   path:"login",
   component:LoginComponent
 },

  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"create",
    component:CreateComponent
  },
  {
    path:"display",
    component:DisplayComponent
  },

  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"delete/:id",
    component:DeleteComponent
  },


  {
    path:"**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
