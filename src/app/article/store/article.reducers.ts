import {initialArticleState} from './article.store';
import {ArticleActions, ArticleActionsTypes} from './article.actions';

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
        errors: action.payload,
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
    case ArticleActionsTypes.UPDATE_ARTICLE: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.UPDATE_ARTICLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    }
    case ArticleActionsTypes.UPDATE_ARTICLE_FAIL: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    }
    case ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR: {
      return {
        ...state,
        isBtnLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR_SUCCESS: {
      return {
        ...state,
        isBtnLoading: false,
        article: {
          ...state.article,
          author: {
            ...state.article.author,
            following: action.payload
          }
        },
      };
    }
    case ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR_FAIL: {
      return {
        ...state,
        isBtnLoading: false,
        errors: action.payload
      };
    }
    case ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR: {
      return {
        ...state,
        isBtnLoading: true,
        errors: null,
      };
    }
    case ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR_SUCCESS: {
      return {
        ...state,
        isBtnLoading: false,
        article: {
          ...state.article,
          author: {
            ...state.article.author,
            following: action.payload
          }
        },
      };
    }
    case ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR_FAIL: {
      return {
        ...state,
        isBtnLoading: false,
        errors: action.payload
      };
    }
    case ArticleActionsTypes.ADD_TO_FAVORITES: {
      return  {
        ...state,
        isBtnLoading: true,
        errors: null
      }
    }
    case ArticleActionsTypes.ADD_TO_FAVORITES_SUCCESS: {
      return  {
        ...state,
        isBtnLoading: false,
        article: {
          ...state.article,
          favorited: true,
          favoritesCount: state.article.favoritesCount + 1
        }
      }
    }
    case ArticleActionsTypes.ADD_TO_FAVORITES_FAIL: {
      return  {
        ...state,
        isBtnLoading: false,
        errors: action.payload
      }
    }
    case ArticleActionsTypes.ADD_TO_FAVORITES_FAIL: {
      return  {
        ...state,
        isBtnLoading: true,
        errors: null
      }
    }
    case ArticleActionsTypes.REMOVE_FROM_FAVORITES_SUCCESS: {
      return  {
        ...state,
        isBtnLoading: false,
        article: {
          ...state.article,
          favorited: false,
          favoritesCount: state.article.favoritesCount - 1
        }
      }
    }
    case ArticleActionsTypes.REMOVE_FROM_FAVORITES_FAIL: {
      return  {
        ...state,
        isBtnLoading: true,
        errors: null
      }
    }
    default:
      return state;
  }
};
