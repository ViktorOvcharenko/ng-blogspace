import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.ArticlePreviewComponent,
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
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
    fromComponents.TagListComponent,
  ]
})
export class SharedModule { }
