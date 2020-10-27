import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

import * as fromContainers from './containers';
import * as fromProfileServices from './services';

@NgModule({
  declarations: [
    fromContainers.ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [
    fromProfileServices.ProfileService
  ]
})
export class ProfileModule { }
