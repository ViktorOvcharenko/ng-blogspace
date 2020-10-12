import { initialAuthState } from './auth.store';
import { AuthActions, AuthActionsTypes } from './auth.actions';

import * as fromAuthModels from '../models';

export const authReducers = (
  state: fromAuthModels.AuthState = initialAuthState,
  action: AuthActions
): fromAuthModels.AuthState => {
  switch (action.type) {
    case AuthActionsTypes.REGISTRATION: {
      return {
        ...state,
        isLoading: true,
        validationErrors: null
      };
    }
    case AuthActionsTypes.REGISTRATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        currentUser: action.payload,
        validationErrors: null
      };
    }
    case AuthActionsTypes.REGISTRATION_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        currentUser: null,
        validationErrors: action.payload
      };
    }
    case AuthActionsTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
        validationErrors: null
      };
    }
    case AuthActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        currentUser: action.payload,
        validationErrors: null
      };
    }
    case AuthActionsTypes.LOGIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        currentUser: null,
        validationErrors: action.payload
      };
    }
    default:
      return state;
  }
};
