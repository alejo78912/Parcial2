import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreateModule } from './create/create.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';
import { UpdateModule } from './update/update.module';



@NgModule({
  declarations: [
    
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    CreateModule,
    ListModule,
    UpdateModule,
    SidenavModule
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
