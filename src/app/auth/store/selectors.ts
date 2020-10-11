import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';

const authFeatureSelector = createFeatureSelector<fromSharedModels.AppState, fromAuthModels.AuthState>('auth');

export const getIsLoading = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.isLoading);
export const getValidationErrors = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.validationErrors);
