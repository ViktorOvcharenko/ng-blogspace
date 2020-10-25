import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromContainers.SettingsComponent,
    fromComponents.SettingsFormComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ],
})
export class SettingsModule { }
