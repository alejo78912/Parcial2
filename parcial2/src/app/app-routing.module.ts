import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path: 'dashboard', component:DashboardComponent,
    children: [
     
      {
        path: '', redirectTo: '/dashboard/create', pathMatch: 'full'
      },
      {
        path: 'create', loadChildren: () => import('./create/create.module').then(m=>m.CreateModule)
      },
      {
        path: 'update', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
      },
      {
        path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
