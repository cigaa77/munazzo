import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DashComponent } from './dash.component';

@NgModule({
  imports: [
    CommonModule,
    DashRoutingModule,
    ThemeModule
  ],
  declarations: [
    DashComponent
  ]
})
export class DashModule { }
