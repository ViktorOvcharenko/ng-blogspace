import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.FeedLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'global',
        pathMatch: 'full'
      },
      {
        path: 'global',
        component: fromContainers.FeedGlobalComponent,
      },
      {
        path: 'your',
        component: fromContainers.FeedYourComponent,
      },
      {
        path: 'tags/:tag',
        component: fromContainers.FeedTagsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FeedRoutingModule { }
