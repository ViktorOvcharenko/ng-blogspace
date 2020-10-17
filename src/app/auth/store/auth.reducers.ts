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
        isLoggedIn: true,
        currentUser: action.payload,
        validationErrors: null
      };
    }
    case AuthActionsTypes.REGISTRATION_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
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
        isLoggedIn: true,
        currentUser: action.payload,
        validationErrors: null
      };
    }
    case AuthActionsTypes.LOGIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
        validationErrors: action.payload
      };
    }
    case AuthActionsTypes.GET_CURRENT_USER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AuthActionsTypes.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.payload
      };
    }
    case AuthActionsTypes.GET_CURRENT_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
      };
    }
    default:
      return state;
  }
};
