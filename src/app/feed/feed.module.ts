import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { feedReducers } from './store/feed.reducers';
import { popularTagsReducers } from './store/popular-tags.reducers';
import { FeedEffects } from './store/feed.effects';
import { PopularTagsEffects } from './store/popular-tags.effects';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [
    fromContainers.FeedGlobalComponent,
    fromContainers.FeedToggleComponent,
    fromContainers.PopularTagsComponent,
    fromComponents.FeedGlobalComponent,
    fromComponents.FeedMainComponent,
    fromComponents.FeedToggleComponent,
    fromComponents.PopularTagsComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    StoreModule.forFeature('feed', feedReducers),
    StoreModule.forFeature('popularTags', popularTagsReducers),
    EffectsModule.forFeature([FeedEffects, PopularTagsEffects]),
  ],
  providers: [
    fromServices.FeedService,
  ]
})
export class FeedModule { }
