import * as fromAuthModels from '../../auth/models';

export interface AppState {
  auth: fromAuthModels.AuthState;
}
