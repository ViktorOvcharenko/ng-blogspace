import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromArticleModels from '../models';

const articleFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromArticleModels.ArticleState>('article');

export const getArticleIsLoading = createSelector(articleFeatureSelector, (state: fromArticleModels.ArticleState) => state.isLoading);
export const getArticleIsFollowLoading = createSelector(articleFeatureSelector, (state: fromArticleModels.ArticleState) => state.isFollowLoading);
export const getArticleIsFavoriteLoading = createSelector(articleFeatureSelector, (state: fromArticleModels.ArticleState) => state.isFavoriteLoading);
export const getArticle = createSelector(articleFeatureSelector, (state: fromArticleModels.ArticleState) => state.article);
export const getArticleErrors = createSelector(articleFeatureSelector, (state: fromArticleModels.ArticleState) => state.errors);
