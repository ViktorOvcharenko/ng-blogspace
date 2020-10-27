import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromProfileModels from '../models';

const profileFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromProfileModels.ProfileState>('profile');

export const getProfileIsLoading = createSelector(profileFeatureSelector, (state: fromProfileModels.ProfileState) => state.isLoading);
export const getProfile = createSelector(profileFeatureSelector, (state: fromProfileModels.ProfileState) => state.profile);
export const getProfileErrors = createSelector(profileFeatureSelector, (state: fromProfileModels.ProfileState) => state.errors);
