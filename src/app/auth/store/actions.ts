import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';

export enum AuthActionsTypes {
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration success',
  REGISTRATION_FAIL = '[Auth] Registration fail',
}

export class Registration implements Action {
  public readonly type = AuthActionsTypes.REGISTRATION;
  constructor(public payload: fromAuthModels.RegistrationRequest) { }
}
export class RegistrationSuccess implements Action {
  public readonly type = AuthActionsTypes.REGISTRATION_SUCCESS;
  constructor(public payload: fromSharedModels.CurrentUser) { }
}

export class RegistrationFail implements Action {
  public readonly type = AuthActionsTypes.REGISTRATION_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type Actions =
  Registration |
  RegistrationSuccess |
  RegistrationFail;
