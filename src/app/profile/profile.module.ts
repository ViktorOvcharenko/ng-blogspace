import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { profileReducers } from './store/profile.reducers';
import { ProfileEffects } from './store/profile.effects';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromProfileServices from './services';

@NgModule({
  declarations: [
    fromContainers.ProfileComponent,
    fromContainers.ProfileFavoritedArticlesComponent,
    fromContainers.ProfileOwnArticlesComponent,
    fromComponents.ProfileComponent,
    fromComponents.ProfileBannerComponent,
    fromComponents.ProfileToggleComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    StoreModule.forFeature('profile', profileReducers),
    EffectsModule.forFeature([ ProfileEffects ]),
  ],
  providers: [
    fromProfileServices.ProfileService,
  ]
})
export class ProfileModule { }
