import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailpageRoutingModule } from './detailpage-routing.module';
import { DetailpageComponent } from './detailpage.component';


@NgModule({
  declarations: [
    DetailpageComponent
  ],
  imports: [
    CommonModule,
    DetailpageRoutingModule
  ]
})
export class DetailpageModule { }
