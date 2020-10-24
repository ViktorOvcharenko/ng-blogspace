import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromFeedModels from '../models';

const feedFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromFeedModels.FeedState>('feed');

export const getIsFeedLoading = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.isLoading);
export const getFeed = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.feed);
export const getFeedErrors = createSelector(feedFeatureSelector, (state: fromFeedModels.FeedState) => state.errors);
