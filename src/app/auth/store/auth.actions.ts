import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';

export enum AuthActionsTypes {
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration success',
  REGISTRATION_FAIL = '[Auth] Registration fail',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAIL = '[Auth] Login fail',
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

export class Login implements Action {
  public readonly type = AuthActionsTypes.LOGIN;
  constructor(public payload: fromAuthModels.LoginRequest) { }
}
export class LoginSuccess implements Action {
  public readonly type = AuthActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: fromSharedModels.CurrentUser) { }
}

export class LoginFail implements Action {
  public readonly type = AuthActionsTypes.LOGIN_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type AuthActions =
  Registration |
  RegistrationSuccess |
  RegistrationFail |
  Login |
  LoginSuccess |
  LoginFail;
