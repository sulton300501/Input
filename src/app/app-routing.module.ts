import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './component/get-all/get-all.component';
import { PostDataComponent } from './component/post-data/post-data.component';



const routes: Routes = [
  {
    path:'',
    component:GetAllComponent
  },
  {
    path:'post-data',
    component:PostDataComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
