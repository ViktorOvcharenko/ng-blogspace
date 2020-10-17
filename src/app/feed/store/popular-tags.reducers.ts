import { initialPopularTagsState } from './popular-tags.store';
import { PopularTagsActions, PopularTagsActionsTypes } from './popular-tags.actions';

import * as fromSharedModels from '../../shared/models';

export const popularTagsReducers = (
  state: fromSharedModels.PopularTagsState = initialPopularTagsState,
  action: PopularTagsActions
): fromSharedModels.PopularTagsState => {
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
    default:
      return state;
  }
};
