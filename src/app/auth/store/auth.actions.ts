import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';
import * as fromSettingsModels from '../../settings/models';

export enum AuthActionsTypes {
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration success',
  REGISTRATION_FAIL = '[Auth] Registration fail',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAIL = '[Auth] Login fail',
  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAIL = '[Auth] Get current user fail',
  UPDATE_CURRENT_USER = '[Auth] Update current user',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current user success',
  UPDATE_CURRENT_USER_FAIL = '[Auth] Update current user fail',
  SET_CURRENT_LANGUAGE = '[Auth] Set current language',
  SET_CURRENT_LANGUAGE_SUCCESS = '[Auth] Set current language success',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout success',
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

export class GetCurrentUser implements Action {
  public readonly type = AuthActionsTypes.GET_CURRENT_USER;
}

export class GetCurrentUserSuccess implements Action {
  public readonly type = AuthActionsTypes.GET_CURRENT_USER_SUCCESS;
  constructor(public payload: fromSharedModels.CurrentUser) { }
}

export class GetCurrentUserFail implements Action {
  public readonly type = AuthActionsTypes.GET_CURRENT_USER_FAIL;
}

export class UpdateCurrentUser implements Action {
  public readonly type = AuthActionsTypes.UPDATE_CURRENT_USER;
  constructor(public payload: fromSettingsModels.CurrentUserRequest) { }
}

export class UpdateCurrentUserSuccess implements Action {
  public readonly type = AuthActionsTypes.UPDATE_CURRENT_USER_SUCCESS;
  constructor(public payload: fromSharedModels.CurrentUser) { }
}

export class UpdateCurrentUserFail implements Action {
  public readonly type = AuthActionsTypes.UPDATE_CURRENT_USER_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class SetCurrentLanguage implements Action {
  public readonly type = AuthActionsTypes.SET_CURRENT_LANGUAGE;
  constructor(public payload: string) { }
}

export class SetCurrentLanguageSuccess implements Action {
  public readonly type = AuthActionsTypes.SET_CURRENT_LANGUAGE_SUCCESS;
  constructor(public payload: string) { }
}

export class Logout implements Action {
  public readonly type = AuthActionsTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  public readonly type = AuthActionsTypes.LOGOUT_SUCCESS;
}

export type AuthActions =
  Registration |
  RegistrationSuccess |
  RegistrationFail |
  Login |
  LoginSuccess |
  LoginFail |
  GetCurrentUser |
  GetCurrentUserSuccess |
  GetCurrentUserFail |
  UpdateCurrentUser |
  UpdateCurrentUserSuccess |
  UpdateCurrentUserFail |
  SetCurrentLanguage |
  SetCurrentLanguageSuccess |
  Logout |
  LogoutSuccess;
