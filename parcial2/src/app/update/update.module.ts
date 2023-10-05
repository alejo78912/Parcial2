import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    FormsModule
  ],
  exports:[
    UpdateComponent,
    SidenavModule  ]
})
export class UpdateModule { }
