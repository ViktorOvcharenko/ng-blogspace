import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  declarations: [
    fromContainers.RegistrationComponent,
    fromComponents.RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthModule { }
