import { initialProfileState } from './profile.store';
import { ProfileActions, ProfileActionTypes } from './profiel.actions';

import * as fromProfileModels from '../models';

export const profileReducers = (
  state: fromProfileModels.ProfileState = initialProfileState,
  action: ProfileActions
): fromProfileModels.ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.GET_PROFILE: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case ProfileActionTypes.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      };
    }
    case ProfileActionTypes.GET_PROFILE_FAIL: {
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
