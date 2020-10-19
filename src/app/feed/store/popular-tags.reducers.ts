import { initialPopularTagsState } from './popular-tags.store';
import { PopularTagsActions, PopularTagsActionsTypes } from './popular-tags.actions';

import * as fromFeedModels from '../models';

export const popularTagsReducers = (
  state: fromFeedModels.PopularTagsState = initialPopularTagsState,
  action: PopularTagsActions
): fromFeedModels.PopularTagsState => {
  switch (action.type) {
    case PopularTagsActionsTypes.GET_POPULAR_TAGS: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case PopularTagsActionsTypes.GET_POPULAR_TAGS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        popularTags: action.payload
      };
    }
    case PopularTagsActionsTypes.GET_POPULAR_TAGS_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PopularTagsActionsTypes.SET_SELECTED_TAG: {
      return {
        ...state,
        selectedTag: action.payload
      };
    }
    case PopularTagsActionsTypes.CLEAR_SELECTED_TAG: {
      return {
        ...state,
        selectedTag: null
      };
    }
    default:
      return state;
  }
};
