import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromArticleModels from '../models';

const commentsFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromArticleModels.CommentsState>('comments');

export const getCommentsIsLoading = createSelector(commentsFeatureSelector, (state: fromArticleModels.CommentsState) => state.isLoading);
export const getComments = createSelector(commentsFeatureSelector, (state: fromArticleModels.CommentsState) => state.comments);
export const getCommentsErrors = createSelector(commentsFeatureSelector, (state: fromArticleModels.CommentsState) => state.errors);
