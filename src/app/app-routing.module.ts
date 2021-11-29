import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  { path: 'blogs',
   loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
  },
  { path: 'detailpage', 
    loadChildren: () => import('./pages/detailpage/detailpage.module').then(m => m.DetailpageModule) 
  },
  { path: 'createblog',
   loadChildren: () => import('./pages/createblog/createblog.module').then(m => m.CreateblogModule) 
  },
  
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
