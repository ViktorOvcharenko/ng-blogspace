import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Registration } from '../../store/auth.actions';
import { Observable } from 'rxjs';
import {
  getIsAuthLoading,
  getValidationErrors
} from '../../store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';
import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  isLoading$: Observable<boolean>;
  validationErrors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsAuthLoading));
    this.validationErrors$ = this.store.pipe(select(getValidationErrors));
  }

  submit(event: fromAuthModels.RegistrationRequest): void {
    this.store.dispatch(new Registration(event));
  }
}
