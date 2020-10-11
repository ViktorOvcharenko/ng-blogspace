import * as fromSharedModels from '../../shared/models';

export interface AuthState {
  isLoading: boolean;
  isLoaded: boolean;
  currentUser?: fromSharedModels.CurrentUser;
  validationErrors: fromSharedModels.BackendErrors;
}
