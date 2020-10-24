import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFeedModels from '../models';

const popularTagsFeatureSelector = createFeatureSelector<fromFeedModels.PopularTagsState, fromFeedModels.PopularTagsState>('popularTags');

export const getIsPopularTagsLoading = createSelector(popularTagsFeatureSelector, (state: fromFeedModels.PopularTagsState) => state.isLoading);
export const getPopularTags = createSelector(popularTagsFeatureSelector, (state: fromFeedModels.PopularTagsState) => state.popularTags);
export const getPopularTagsErrors = createSelector(popularTagsFeatureSelector, (state: fromFeedModels.PopularTagsState) => state.errors);
export const getSelectedTag = createSelector(popularTagsFeatureSelector, (state: fromFeedModels.PopularTagsState) => state.selectedTag);
