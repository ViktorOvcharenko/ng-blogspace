import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromContainers from './containers';

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
  ]
})
export class AuthModule { }
