import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { FeedEffects } from './store/auth.effects';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.FeedMainComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    EffectsModule.forFeature([FeedEffects])
  ]
})
export class FeedModule { }
