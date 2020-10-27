import * as fromProfileModels from '../models';

export const initialProfileState: fromProfileModels.ProfileState = {
  isLoading: false,
  profile: null,
  errors: null,
};
