import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducers } from './store/reducers';
import { AuthEffects } from './store/effects';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
  declarations: [
    fromContainers.RegistrationComponent,
    fromComponents.RegistrationComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    fromServices.AuthService
  ]
})
export class AuthModule { }
