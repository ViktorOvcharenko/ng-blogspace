import * as fromAuthModels from '../models';

export const initialAuthState: fromAuthModels.AuthState = {
  isLoading: false,
  isLoggedIn: false,
  currentUser: null,
  currentLanguage: null,
  validationErrors: null
};
