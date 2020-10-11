import { Action } from '@ngrx/store';

import * as fromAuthModels from '../models';

export enum AuthActionsTypes {
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration success',
  REGISTRATION_FAILURE = '[Auth] Registration failure',
}

export class Registration implements Action {
  public readonly type = AuthActionsTypes.REGISTRATION;
  constructor(public payload: fromAuthModels.RegistrationRequest) { }
}

export type Actions = Registration;
