import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrentUser, SetCurrentLanguage } from './auth/store/auth.actions';

import * as fromSharedServices from './shared/services';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
             <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store,
    private persistenceService: fromSharedServices.PersistenceService,
  ) { }

  ngOnInit() {
    const lang = this.persistenceService.get('currentLanguage');
    if (lang) {
      this.store.dispatch(new SetCurrentLanguage(lang));
    }
    this.store.dispatch(new GetCurrentUser());
  }
}
