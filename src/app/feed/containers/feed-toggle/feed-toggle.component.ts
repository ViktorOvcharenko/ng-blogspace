import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getIsLoggedIn } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-feed-toggle-container',
  templateUrl: './feed-toggle.component.html',
})
export class FeedToggleComponent {
  isLoggedIn$: Observable<boolean>;
  @Input() tagName: string;

  constructor(private store$: Store) {
    this.isLoggedIn$ = this.store$.pipe(select(getIsLoggedIn));
  }
}
