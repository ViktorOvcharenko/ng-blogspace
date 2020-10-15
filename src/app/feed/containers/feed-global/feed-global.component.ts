import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetFeed } from '../../store/feed.actions';
import {
  getErrors,
  getFeed,
  getIsLoading
} from '../../store/feed.selectors';

import * as fromFeedModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-feed-global-container',
  templateUrl: './feed-global.component.html'
})
export class FeedGlobalComponent implements OnInit {
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.feed$ = this.store.pipe(select(getFeed));
    this.errors$ = this.store.pipe(select(getErrors));
  }

  ngOnInit(): void {
    this.store.dispatch(new GetFeed('/articles'));
  }
}
