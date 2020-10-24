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
import * as fromFeedServices from './services';

@NgModule({
  declarations: [
    fromContainers.FeedGlobalComponent,
    fromContainers.FeedYourComponent,
    fromContainers.FeedTagsComponent,
    fromContainers.FeedToggleComponent,
    fromContainers.PopularTagsComponent,
    fromComponents.FeedBannerComponent,
    fromComponents.FeedLayoutComponent,
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
    fromFeedServices.FeedService,
    fromFeedServices.PopularTagsService
  ]
})
export class FeedModule { }
