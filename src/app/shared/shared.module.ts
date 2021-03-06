import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import * as fromComponents from './components';
import * as fromSharedServices from './services';

@NgModule({
  declarations: [
    fromComponents.AddToFavoritesComponent,
    fromComponents.ArticlePreviewComponent,
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.ConfirmDialogComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
    fromComponents.TagListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule,
    fromComponents.AddToFavoritesComponent,
    fromComponents.ArticlePreviewComponent,
    fromComponents.ArticleListComponent,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
    fromComponents.PaginationComponent,
    fromComponents.TagListComponent,
  ],
  providers: [
    fromSharedServices.PersistenceService,
    fromSharedServices.AddToFavoritesService,
  ]
})
export class SharedModule { }
