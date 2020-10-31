import * as fromSharedModels from '../../shared/models';

export interface ProfileState {
  isLoading: boolean;
  isFollowLoading: boolean;
  profile: fromSharedModels.Profile;
  errors: fromSharedModels.BackendErrors;
}
