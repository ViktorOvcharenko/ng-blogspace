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
    default:
      return state;
  }
};
