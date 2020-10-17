import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import * as fromSharedServices from './services';

@NgModule({
  declarations: [
    fromComponents.ArticlePreviewComponent,
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
    fromComponents.PopularTagsComponent,
    fromComponents.TagListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    fromComponents.ArticlePreviewComponent,
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
    fromComponents.PopularTagsComponent,
    fromComponents.TagListComponent,
  ],
  providers: [
    fromSharedServices.PersistenceService,
    fromSharedServices.PopularTagsService,
  ]
})
export class SharedModule { }
