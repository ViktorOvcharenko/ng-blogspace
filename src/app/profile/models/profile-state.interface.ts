import * as fromSharedModels from '../../shared/models';

export interface ProfileState {
  isLoading: boolean;
  profile: fromSharedModels.Profile;
  errors: fromSharedModels.BackendErrors;
}
