import * as fromAuthModels from '../models';

export const initialAuthState: fromAuthModels.AuthState = {
  isLoading: false,
  isLoaded: false,
  currentUser: null,
  validationErrors: null
};
