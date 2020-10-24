import { initialArticleState } from './article.store';
import { ArticleActions, ArticleActionsTypes } from './article.actions';

import * as fromArticleModels from '../models';

export const articleReducers = (
  state: fromArticleModels.ArticleState = initialArticleState,
  action: ArticleActions
): fromArticleModels.ArticleState => {
  switch (action.type) {
    case ArticleActionsTypes.GET_ARTICLE: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.GET_ARTICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    }
    case ArticleActionsTypes.GET_ARTICLE_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ArticleActionsTypes.DELETE_ARTICLE: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.DELETE_ARTICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        article: null,
      };
    }
    case ArticleActionsTypes.DELETE_ARTICLE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    }
    case ArticleActionsTypes.CREATE_ARTICLE: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.CREATE_ARTICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    }
    case ArticleActionsTypes.CREATE_ARTICLE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    }
    default:
      return state;
  }
};
