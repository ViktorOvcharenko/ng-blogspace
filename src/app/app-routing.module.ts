import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromSharedGuards from './shared/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
  {
    path: 'feed',
    canActivate: [ fromSharedGuards.AuthGuard ],
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'article',
    canActivate: [ fromSharedGuards.AuthGuard ],
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
  },
  {
    path: 'settings',
    canActivate: [ fromSharedGuards.AuthGuard ],
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'profile',
    canActivate: [ fromSharedGuards.AuthGuard ],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: '**',
    redirectTo: 'feed',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
