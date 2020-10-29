import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, takeUntil } from 'rxjs/operators';
import {
  getFeed,
  getFeedErrors,
  getIsFeedLoading
} from '../../../feed/store/feed.selectors';
import { getProfile } from '../../store/profile.selectors';
import {
  AddToFavorites,
  GetFeed,
  RemoveFromFavorites
} from '../../../feed/store/feed.actions';

import * as fromSharedModels from '../../../shared/models';
import * as fromFeedModels from '../../../feed/models';

@Component({
  selector: 'app-profile-favorited-articles',
  templateUrl: './profile-favorited-articles.component.html'
})
export class ProfileFavoritedArticlesComponent implements OnInit, OnDestroy {
  apiUrl: string = environment.apiUrl;
  url: string[];
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  profile$: Observable<fromSharedModels.Profile>;
  favorited: string;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsFeedLoading));
    this.feed$ = this.store.pipe(select(getFeed));
    this.errors$ = this.store.pipe(select(getFeedErrors));
    this.profile$ = this.store.pipe(select(getProfile));
  }

  get limit(): number {
    return environment.limit;
  }

  ngOnInit(): void {
    const startPaginationParams: fromSharedModels.PaginationParams = {
      offset: 0,
      limit: this.limit
    };
    this.profile$
      .pipe(
        map(profile => profile.username),
        takeUntil(this.destroy$)
      )
      .subscribe(username => {
        this.url = ['/profile', username, 'favorited'];
        this.favorited = username;
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
      favorited: this.favorited
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
