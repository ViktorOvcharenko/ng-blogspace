import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum ProfileActionTypes  {
  GET_PROFILE = '[Profile] Get profile',
  GET_PROFILE_SUCCESS = '[Profile] Get profile success',
  GET_PROFILE_FAIL = '[Profile] Get profile fail',
}

export class GetProfile implements Action {
  public readonly type = ProfileActionTypes.GET_PROFILE;
  constructor(public payload: string) { }
}

export class GetProfileSuccess implements Action {
  public readonly type = ProfileActionTypes.GET_PROFILE_SUCCESS;
  constructor(public payload: fromSharedModels.Profile) { }
}

export class GetProfileFail implements Action {
  public readonly type = ProfileActionTypes.GET_PROFILE_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type ProfileActions =
  GetProfile |
  GetProfileSuccess |
  GetProfileFail;
