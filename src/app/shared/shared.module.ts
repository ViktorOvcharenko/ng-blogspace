import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    fromComponents.BackendErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    fromComponents.BackendErrorMessagesComponent
  ]
})
export class SharedModule { }
