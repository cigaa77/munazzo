import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPlatformRoutingModule } from './account-platform-routing.module';
import { AccountPlatformComponent } from './account-platform/account-platform.component';
import { AccountPlatformService } from './account-platform/services/account-platform.service';
import { PlatformSettingsService } from './account-platform/services/platform-settings.service';
import { IntegrationFilterService } from './account-platform/services/integration-filter.service';

@NgModule({
  imports: [
    CommonModule,
    AccountPlatformRoutingModule
  ],
  declarations: [
    AccountPlatformComponent
  ],
  providers:[
    AccountPlatformService,
    PlatformSettingsService,
    IntegrationFilterService
  ]
})
export class AccountPlatformModule { }
