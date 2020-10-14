import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedEffects } from './store/auth.effects';
import {feedReducers} from './store/feed.reducers';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [
    fromComponents.FeedMainComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature([FeedEffects])
  ],
  providers: [
    fromServices.FeedService
  ]
})
export class FeedModule { }
