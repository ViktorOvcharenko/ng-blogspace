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
  ]
})
export class SharedModule { }
