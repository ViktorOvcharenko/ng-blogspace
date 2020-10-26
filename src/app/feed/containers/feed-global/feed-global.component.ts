import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {AddToFavorites, GetFeed, RemoveFromFavorites} from '../../store/feed.actions';
import {
  getFeed,
  getFeedErrors,
  getIsFeedLoading,
} from '../../store/feed.selectors';

import * as fromFeedModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-feed-global-container',
  templateUrl: './feed-global.component.html'
})
export class FeedGlobalComponent implements OnInit {
  apiUrl: string = environment.apiUrl;
  url: string[] = ['/feed', 'global'];
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store) {
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
    this.fetchFeed(startPaginationParams);
  }

  fetchFeed(paginationParams: fromSharedModels.PaginationParams): void {
    const request: fromFeedModels.FeedRequest = {
      url: `${this.apiUrl}/articles`,
      paginationParams
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
