import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum ProfileActionTypes  {
  GET_PROFILE = '[Profile] Get profile',
  GET_PROFILE_SUCCESS = '[Profile] Get profile success',
  GET_PROFILE_FAIL = '[Profile] Get profile fail',
  FOLLOW_TO_USER = '[Profile] Follow to user',
  FOLLOW_TO_USER_SUCCESS = '[Profile] Follow to user success',
  FOLLOW_TO_USER_FAIL = '[Profile] Follow to user fail',
  UNFOLLOW_FROM_USER = '[Profile] Unfollow from user',
  UNFOLLOW_FROM_USER_SUCCESS = '[Profile] Unfollow from user success',
  UNFOLLOW_FROM_USER_FAIL = '[Profile] Unfollow from user fail',
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

export class FollowUser implements Action {
  public readonly type = ProfileActionTypes.FOLLOW_TO_USER;
  constructor(public payload: string) { }
}

export class FollowUserSuccess implements Action {
  public readonly type = ProfileActionTypes.FOLLOW_TO_USER_SUCCESS;
  constructor(public payload: fromSharedModels.Profile) { }
}

export class FollowUserFail implements Action {
  public readonly type = ProfileActionTypes.FOLLOW_TO_USER_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class UnfollowUser implements Action {
  public readonly type = ProfileActionTypes.UNFOLLOW_FROM_USER;
  constructor(public payload: string) { }
}

export class UnfollowUserSuccess implements Action {
  public readonly type = ProfileActionTypes.UNFOLLOW_FROM_USER_SUCCESS;
  constructor(public payload: fromSharedModels.Profile) { }
}

export class UnfollowUserFail implements Action {
  public readonly type = ProfileActionTypes.UNFOLLOW_FROM_USER_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type ProfileActions =
  GetProfile |
  GetProfileSuccess |
  GetProfileFail |
  FollowUser |
  FollowUserSuccess |
  FollowUserFail |
  UnfollowUser |
  UnfollowUserSuccess |
  UnfollowUserFail;
