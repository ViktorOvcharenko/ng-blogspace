import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'login',
    component: fromContainers.LoginComponent
  },
  {
    path: 'registration',
    component: fromContainers.RegistrationComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
