import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from '../detailpage/detailpage.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  // {
  //   path:"blog/:id",
  //   component:DetailpageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
