import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaDetailComponent } from '../components/area-detail/area-detail.component';
import { MainPageBodyComponent } from '../components/main-page-body/main-page-body.component';
const routes: Routes = [
  {path:'',component:MainPageBodyComponent,pathMatch:"full"},
  {path:'areaDetail',component:AreaDetailComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
