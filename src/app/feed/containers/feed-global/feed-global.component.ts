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

@Component({
  selector: 'app-feed-global-container',
  templateUrl: './feed-global.component.html'
})
export class FeedGlobalComponent implements OnInit {
  isLoading$: Observable<boolean>;
  errors$: Observable<string>;
  feed$: Observable<fromFeedModels.FeedResponse>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.errors$ = this.store.pipe(select(getErrors));
    this.feed$ = this.store.pipe(select(getFeed));
  }

  ngOnInit(): void {
    this.store.dispatch(new GetFeed('/articles'));
  }
}
