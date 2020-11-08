import { initialCommentsState } from './comments.store';
import { CommentsActions, CommentsActionTypes } from './comments.actions';

import * as fromArticleModels from '../models';

export const commentsReducers = (
  state: fromArticleModels.CommentsState = initialCommentsState,
  action: CommentsActions
): fromArticleModels.CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.GET_COMMENTS: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case CommentsActionTypes.GET_COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    }
    case CommentsActionTypes.GET_COMMENTS_FAIL: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }
    case CommentsActionTypes.CREATE_COMMENT: {
      return {
        ...state,
        errors: null,
      };
    }
    case CommentsActionTypes.CREATE_COMMENT_SUCCESS: {
      const commentsAfterCreate = [ action.payload, ...state.comments];
      return {
        ...state,
        comments: commentsAfterCreate,
      };
    }
    case CommentsActionTypes.CREATE_COMMENT_FAIL: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case CommentsActionTypes.DELETE_COMMENT: {
      return {
        ...state,
        errors: null,
      };
    }
    case CommentsActionTypes.DELETE_COMMENT_SUCCESS: {
      const commentsAfterRemove = state.comments.filter(comment => comment.id !== action.payload);
      return {
        ...state,
        comments: commentsAfterRemove,
      };
    }
    case CommentsActionTypes.DELETE_COMMENT_FAIL: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};
