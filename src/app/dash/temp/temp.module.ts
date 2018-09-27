import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempRoutingModule } from './temp-routing.module';
import { TempComponent } from './temp.component';

@NgModule({
  imports: [
    CommonModule,
    TempRoutingModule
  ],
  declarations: [TempComponent]
})
export class TempModule { }
