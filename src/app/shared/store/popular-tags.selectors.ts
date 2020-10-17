import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../models';

const popularTagsFeatureSelector = createFeatureSelector<fromSharedModels.PopularTagsState, fromSharedModels.PopularTagsState>('popularTags');

export const getIsLoading = createSelector(popularTagsFeatureSelector, (state: fromSharedModels.PopularTagsState) => state.isLoading);
export const getPopularTags = createSelector(popularTagsFeatureSelector, (state: fromSharedModels.PopularTagsState) => state.popularTags);
export const getErrors = createSelector(popularTagsFeatureSelector, (state: fromSharedModels.PopularTagsState) => state.errors);
