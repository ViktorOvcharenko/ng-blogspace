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
    default:
      return state;
  }
};
