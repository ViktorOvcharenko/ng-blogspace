import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GetPopularTags, SetSelectedTag } from '../../store/popular-tags.actions';
import {
  getIsPopularTagsLoading,
  getPopularTags,
  getPopularTagsErrors,
} from '../../store/popular-tags.selectors';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-popular-tags-container',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  popularTags$: Observable<fromSharedModels.Tag[]>;
  errors$: Observable<string>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getIsPopularTagsLoading));
    this.popularTags$ = this.store.pipe(select(getPopularTags));
    this.errors$ = this.store.pipe(select(getPopularTagsErrors));
  }

  ngOnInit(): void {
    this.fetchPopularTags();
  }

  fetchPopularTags(): void {
    this.store.dispatch(new GetPopularTags());
  }

  selectTag(event: fromSharedModels.Tag): void {
    this.store.dispatch(new SetSelectedTag(event));
  }
}
