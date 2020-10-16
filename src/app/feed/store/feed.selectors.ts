import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromFeedModels from '../models';

const feedFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromFeedModels.FeedState>('feed');

export const getIsLoading = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.isLoading);
export const getErrors = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.errors);
export const getFeed = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.feed);