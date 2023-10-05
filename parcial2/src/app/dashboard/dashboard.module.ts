import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidenavModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
