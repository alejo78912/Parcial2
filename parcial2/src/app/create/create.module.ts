import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreateRoutingModule,
    SidenavModule
  ],
  exports:[CreateComponent,]
})
export class CreateModule { }
