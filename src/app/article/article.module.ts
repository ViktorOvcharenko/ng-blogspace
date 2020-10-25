import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { articleReducers } from './store/article.reducers';
import { ArticleEffects } from './store/article.effects';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromArticleServices from './services';

@NgModule({
  declarations: [
    fromContainers.ArticleComponent,
    fromContainers.ArticleEditComponent,
    fromContainers.ArticleNewComponent,
    fromComponents.ArticleComponent,
    fromComponents.ArticleBannerComponent,
    fromComponents.ArticleFormComponent,
    fromComponents.ArticleFormTagListComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([ArticleEffects]),
  ],
  providers: [
    fromArticleServices.ArticleService,
  ]
})
export class ArticleModule { }
