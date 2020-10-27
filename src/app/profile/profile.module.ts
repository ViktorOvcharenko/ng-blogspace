import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {profileReducers} from './store/profile.reducers';
import { ProfileEffects } from './store/profile.effects';

import * as fromContainers from './containers';
import * as fromProfileServices from './services';

@NgModule({
  declarations: [
    fromContainers.ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    StoreModule.forFeature('profile', profileReducers),
    EffectsModule.forFeature([ ProfileEffects ])
  ],
  providers: [
    fromProfileServices.ProfileService
  ]
})
export class ProfileModule { }
