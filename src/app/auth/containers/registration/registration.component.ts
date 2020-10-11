import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Registration } from '../../store/actions';
import { Observable } from 'rxjs';
import { getIsLoading } from '../../store/selectors';

import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
  }

  submit(event: fromAuthModels.RegistrationRequest): void {
    this.store.dispatch(new Registration(event));
  }
}
