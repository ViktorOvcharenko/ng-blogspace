import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routs: Routes = [
  {
    path: ':username',
    component: fromContainers.ProfileComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routs) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule { }
