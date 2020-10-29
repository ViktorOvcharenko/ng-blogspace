import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params} from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  getFeed,
  getFeedErrors,
  getIsFeedLoading
} from '../../../feed/store/feed.selectors';
import {
  AddToFavorites,
  GetFeed,
  RemoveFromFavorites
} from '../../../feed/store/feed.actions';

import * as fromFeedModels from '../../../feed/models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-profile-own-articles',
  templateUrl: './profile-own-articles.component.html'
})
export class ProfileOwnArticlesComponent implements OnInit, OnDestroy {
  apiUrl: string = environment.apiUrl;
  url: string[];
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  author: string;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(getIsFeedLoading));
    this.feed$ = this.store.pipe(select(getFeed));
    this.errors$ = this.store.pipe(select(getFeedErrors));
  }

  get limit(): number {
    return environment.limit;
  }

  ngOnInit(): void {
    const startPaginationParams: fromSharedModels.PaginationParams = {
      offset: 0,
      limit: this.limit
    };
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.url = ['/profile', params.username];
        this.author = params.username;
        this.fetchFeed(startPaginationParams);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchFeed(paginationParams: fromSharedModels.PaginationParams): void {
    const request: fromFeedModels.FeedRequest = {
      url: `${this.apiUrl}/articles`,
      paginationParams,
      author: this.author
    };

    this.store.dispatch(new GetFeed(request));
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    if (event.isFavorite) {
      this.store.dispatch(new RemoveFromFavorites(event.slug));
    } else {
      this.store.dispatch(new AddToFavorites(event.slug));
    }
  }
}
