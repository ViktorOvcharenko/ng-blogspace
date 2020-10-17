import * as fromAuthModels from '../models';

export const initialAuthState: fromAuthModels.AuthState = {
  isLoading: false,
  isLoggedIn: false,
  currentUser: null,
  validationErrors: null
};
