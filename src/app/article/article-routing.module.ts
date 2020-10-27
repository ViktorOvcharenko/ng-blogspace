import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'new',
    component: fromContainers.ArticleNewComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: fromContainers.ArticleComponent,
  },
  {
    path: ':slug/edit',
    component: fromContainers.ArticleEditComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ArticleRoutingModule { }
