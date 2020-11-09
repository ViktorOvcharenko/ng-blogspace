import * as fromSharedModels from '../../shared/models';

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  currentUser?: fromSharedModels.CurrentUser;
  currentLanguage: string;
  validationErrors: fromSharedModels.BackendErrors;
}
