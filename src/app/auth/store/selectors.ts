import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromModels from '../../shared/models';
import * as fromAuthModels from '../models';

const authFeatureSelector = createFeatureSelector<fromModels.AppState, fromAuthModels.AuthState>('auth');

export const getIsLoading = createSelector(authFeatureSelector, (state: fromAuthModels.AuthState) => state.isLoading);
