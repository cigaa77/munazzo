import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      {
        path: 'temp',
        loadChildren:'./temp/temp.module#TempModule'
      },
      {
        path: 'account',
        loadChildren:'./account-platform/account-platform.module#AccountPlatformModule'
      },
      { path: '', redirectTo: 'temp', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
