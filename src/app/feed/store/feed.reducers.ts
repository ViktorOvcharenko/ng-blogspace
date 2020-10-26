import { initialFeedState } from './feed.store';
import { FeedActions, FeedActionsTypes } from './feed.actions';

import * as fromFeedModels from '../models';

export const feedReducers = (
  state: fromFeedModels.FeedState = initialFeedState,
  action: FeedActions
): fromFeedModels.FeedState => {
  switch (action.type) {
    case FeedActionsTypes.GET_FEED: {
      return {
        ...state,
        isLoading: true,
        errors: null
      };
    }
    case FeedActionsTypes.GET_FEED_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        feed: action.payload
      };
    }
    case FeedActionsTypes.GET_FEED_FAIL: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    }
    case FeedActionsTypes.ADD_TO_FAVORITES: {
      return {
        ...state,
        errors: null
      };
    }
    case FeedActionsTypes.ADD_TO_FAVORITES_SUCCESS: {
      const updatedArticles = [ ...state.feed.articles ]
        .map(article => {
          if (article.slug === action.payload) {
            return { ...article, favoritesCount: article.favoritesCount + 1, favorited: true }
          }
         return { ...article }
        });

      return {
        ...state,
        feed: {
          ...state.feed,
          articles: updatedArticles
        }
      };
    }
    case FeedActionsTypes.ADD_TO_FAVORITES_FAIL: {
      return {
        ...state,
        errors: action.payload
      };
    }
    case FeedActionsTypes.REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        errors: null
      };
    }
    case FeedActionsTypes.REMOVE_FROM_FAVORITES_SUCCESS: {
      const updatedArticles = [ ...state.feed.articles ]
        .map(article => {
          if (article.slug === action.payload) {
            return { ...article, favoritesCount: article.favoritesCount - 1, favorited: false }
          }
          return { ...article }
        });

      return {
        ...state,
        feed: {
          ...state.feed,
          articles: updatedArticles
        }
      };
    }
    case FeedActionsTypes.REMOVE_FROM_FAVORITES_FAIL: {
      return {
        ...state,
        errors: action.payload
      };
    }
    default:
      return state;
  }
};
