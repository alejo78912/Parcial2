import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SidenavModule,
    FormsModule
  ],
  exports:[
    ListComponent
  ]
})
export class ListModule { }
