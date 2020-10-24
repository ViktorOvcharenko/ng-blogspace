import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

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
  ]
})
export class AuthModule { }
