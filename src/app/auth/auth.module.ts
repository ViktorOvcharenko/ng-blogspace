import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authReducers } from './store/auth.reducers';
import { AuthEffects } from './store/auth.effects';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import * as fromSharedServices from '../shared/services';

@NgModule({
  declarations: [
    fromContainers.LoginComponent,
    fromContainers.RegistrationComponent,
    fromComponents.LoginComponent,
    fromComponents.RegistrationComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    fromServices.AuthService,
    fromSharedServices.PersistenceService,
  ]
})
export class AuthModule { }
