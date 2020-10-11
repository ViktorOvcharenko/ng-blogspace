import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Registration } from '../../store/actions';
import { Observable } from 'rxjs';
import {
  getIsLoading,
  getValidationErrors
} from '../../store/selectors';

import * as fromModels from '../../../shared/models';
import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<fromModels.BackendErrors>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.backendErrors$ = this.store.pipe(select(getValidationErrors));
  }

  submit(event: fromAuthModels.RegistrationRequest): void {
    this.store.dispatch(new Registration(event));
  }
}
