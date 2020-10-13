import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedRoutingModule } from './feed-routing.module';

import * as fromContainers from './containers';


@NgModule({
  declarations: [
    fromContainers.FeedMainComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
  ]
})
export class FeedModule { }
