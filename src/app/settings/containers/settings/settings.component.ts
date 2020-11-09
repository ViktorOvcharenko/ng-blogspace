import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  Logout,
  SetCurrentLanguage,
  UpdateCurrentUser
} from '../../../auth/store/auth.actions';
import {
  getCurrentUser,
  getIsAuthLoading,
  getValidationErrors
} from '../../../auth/store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';
import * as fromSettingsModels from '../../models';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  isLoading$: Observable<boolean>;
  currentUser$: Observable<fromSharedModels.CurrentUser>;
  validationErrors$: Observable<fromSharedModels.BackendErrors>;
  languages: fromSettingsModels.Language[] = [
    { title: 'settings.english', value: 'en' },
    { title: 'settings.russian', value: 'ru' },
  ];

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsAuthLoading));
    this.currentUser$ = this.store.pipe(select(getCurrentUser));
    this.validationErrors$ = this.store.pipe(select(getValidationErrors));
  }

  updateCurrentUser(requestBody: fromSettingsModels.CurrentUserRequest) {
    this.store.dispatch(new UpdateCurrentUser(requestBody));
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }

  selectLang(event: string) {
    this.store.dispatch(new SetCurrentLanguage(event));
  }
}
