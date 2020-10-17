import * as fromSharedModels from '../../shared/models';

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser?: fromSharedModels.CurrentUser;
  validationErrors: fromSharedModels.BackendErrors;
}
