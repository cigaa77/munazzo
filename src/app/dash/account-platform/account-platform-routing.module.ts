import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPlatformComponent } from './account-platform/account-platform.component';

const routes: Routes = [
  {
    path:'',
    component:AccountPlatformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPlatformRoutingModule { }
