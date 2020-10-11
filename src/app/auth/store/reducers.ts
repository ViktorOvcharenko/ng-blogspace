import { initialAuthState } from './store';
import { Actions, AuthActionsTypes } from './actions';

import * as fromAuthModels from '../models';

export const authReducers = (
  state: fromAuthModels.AuthState = initialAuthState,
  action: Actions
): fromAuthModels.AuthState => {
  switch (action.type) {
    case AuthActionsTypes.REGISTRATION: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};
