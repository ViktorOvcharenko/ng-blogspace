import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  declarations: [
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
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
  ]
})
export class SharedModule { }
