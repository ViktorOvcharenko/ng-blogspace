import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  getCurrentUser,
  getIsAnonymous,
  getIsLoggedIn
} from '../../../auth/store/auth.selectors';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<fromSharedModels.CurrentUser>

  constructor(private store$: Store) {
    this.isLoggedIn$ = this.store$.pipe(select(getIsLoggedIn))
    this.isAnonymous$ = this.store$.pipe(select(getIsAnonymous))
    this.currentUser$ = this.store$.pipe(select(getCurrentUser))
  }
}
