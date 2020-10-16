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
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed-global-container',
  templateUrl: './feed-global.component.html'
})
export class FeedGlobalComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store, private router: Router) {
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.feed$ = this.store.pipe(select(getFeed));
    this.errors$ = this.store.pipe(select(getErrors));
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
    const request: fromSharedModels.PaginationRequest = {
      url: `${this.apiUrl}/articles`,
      paginationParams
    };
    const currentPage = this.computeCurrentPage(paginationParams);

    this.store.dispatch(new GetFeed(request));
    this.addQueryParams(currentPage);
  }

  computeCurrentPage(params: fromSharedModels.PaginationParams): number {
    return params.offset / params.limit + 1;
  }

  addQueryParams(page: number): void {
    this.router.navigate(['/feed', 'global'], {
      queryParams: { page }
    });
  }
}
