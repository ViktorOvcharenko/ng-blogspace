import * as fromModels from '../../shared/models';

export interface AuthState {
  isLoading: boolean;
  isLoaded: boolean;
  currentUser?: fromModels.CurrentUser;
  validationErrors: fromModels.BackendErrors;
}
