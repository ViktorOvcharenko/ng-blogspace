import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Login } from '../../store/auth.actions';
import { Observable } from 'rxjs';
import {
  getIsLoading,
  getValidationErrors
} from '../../store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';
import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.backendErrors$ = this.store.pipe(select(getValidationErrors));
  }

  submit(event: fromAuthModels.LoginRequest): void {
    this.store.dispatch(new Login(event));
  }
}
