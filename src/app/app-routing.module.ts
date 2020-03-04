import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { Component } from '@fullcalendar/core';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path:"",
    redirectTo: "dashboard",
    pathMatch: "full"
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
