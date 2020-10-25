import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';

import * as fromContainers from './containers';
// import * as fromComponents from './components';
import * as fromSettingsServices from './services';

@NgModule({
  declarations: [
    fromContainers.SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ],
  providers: [
    fromSettingsServices.SettingsService
  ]
})
export class SettingsModule { }
