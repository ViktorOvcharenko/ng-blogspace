import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Registration } from '../../store/actions';

import * as fromAuthModels from '../../models';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private store: Store) { }

  submit(event: fromAuthModels.RegistrationRequest): void {
    this.store.dispatch(new Registration(event));
  }
}
