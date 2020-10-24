import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';

const authFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromAuthModels.AuthState>('auth');

export const getIsAuthLoading = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.isLoading);
export const getIsLoggedIn = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.isLoggedIn);
export const getIsAnonymous = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => !state.isLoggedIn);
export const getCurrentUser = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.currentUser);
export const getValidationErrors = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.validationErrors);
