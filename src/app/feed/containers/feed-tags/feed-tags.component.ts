import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { GetFeed } from '../../store/feed.actions';
import {
  getFeed,
  getFeedErrors,
  getIsFeedLoading,
} from '../../store/feed.selectors';
import { getSelectedTag } from '../../store/popular-tags.selectors';
import { ClearSelectedTag } from '../../store/popular-tags.actions';

import * as fromFeedModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-feed-global-container',
  templateUrl: './feed-tags.component.html'
})
export class FeedTagsComponent implements OnInit, OnDestroy {
  apiUrl: string = environment.apiUrl;
  url: string[] = ['/feed', 'global'];
  isLoading$: Observable<boolean>;
  feed$: Observable<fromFeedModels.FeedResponse>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  selectedTag$: Observable<fromSharedModels.Tag>;
  selectedTag: fromSharedModels.Tag;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsFeedLoading));
    this.feed$ = this.store.pipe(select(getFeed));
    this.errors$ = this.store.pipe(select(getFeedErrors));
    this.selectedTag$ = this.store.pipe(select(getSelectedTag))
  }

  get limit(): number {
    return environment.limit;
  }

  ngOnInit(): void {
    const startPaginationParams: fromSharedModels.PaginationParams = {
      offset: 0,
      limit: this.limit
    };
    this.selectedTag$
      .pipe(takeUntil(this.destroy$))
      .subscribe(selectedTag => {
        this.selectedTag = selectedTag;
      this.fetchFeed(startPaginationParams);
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedTag());
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchFeed(paginationParams: fromSharedModels.PaginationParams): void {
    const request: fromFeedModels.FeedRequest = {
      url: `${this.apiUrl}/articles`,
      paginationParams,
      tagParam: this.selectedTag,
    };

    this.store.dispatch(new GetFeed(request));
  }
}
