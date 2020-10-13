import * as fromSharedModels from '../../shared/models';

export interface AuthResponse {
  user: fromSharedModels.CurrentUser;
}
