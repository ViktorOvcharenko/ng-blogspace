import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    fromComponents.BackendErrorMessagesComponent,
    fromComponents.HeaderComponent,
    fromComponents.LoaderComponent,
  ]
})
export class SharedModule { }
