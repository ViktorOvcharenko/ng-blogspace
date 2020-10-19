import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
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
  selector: 'app-feed-your-container',
  templateUrl: './feed-your.component.html'
})
export class FeedYourComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  url: string[] = ['/feed', 'global'];
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store$: Store) {
    this.isLoading$ = this.store$.pipe(select(getIsLoading));
    this.feed$ = this.store$.pipe(select(getFeed));
    this.errors$ = this.store$.pipe(select(getErrors));
  }

  get limit(): number {
    return environment.limit;
  }

  ngOnInit(): void {
    const startPaginationParams: fromSharedModels.PaginationParams = {
      offset: 0,
      limit: this.limit
    };
    this.fetchFeed(startPaginationParams);
  }

  fetchFeed(paginationParams: fromSharedModels.PaginationParams): void {
    const request: fromSharedModels.FeedRequest = {
      url: `${this.apiUrl}/articles/feed`,
      paginationParams
    };

    this.store$.dispatch(new GetFeed(request));
  }
}
