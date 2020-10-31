import * as fromProfileModels from '../models';

export const initialProfileState: fromProfileModels.ProfileState = {
  isLoading: false,
  isFollowLoading: false,
  profile: null,
  errors: null,
};
