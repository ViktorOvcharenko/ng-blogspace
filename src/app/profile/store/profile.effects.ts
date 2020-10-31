import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  FollowUser,
  FollowUserFail,
  FollowUserSuccess,
  GetProfile,
  GetProfileFail,
  GetProfileSuccess,
  ProfileActionTypes,
  UnfollowUser,
  UnfollowUserFail,
  UnfollowUserSuccess
} from './profiel.actions';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromProfileServices from '../services';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class ProfileEffects {
  @Effect()
  getProfile$: Observable<Action> = this.actions$.pipe(
    ofType<GetProfile>(ProfileActionTypes.GET_PROFILE),
    switchMap(({payload}) => this.profileService.getProfile(payload)),
    switchMap((profile: fromSharedModels.Profile) => of(new GetProfileSuccess(profile))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { user: errorResponse.error.error };
      return of(new GetProfileFail(error));
    })
  );

  @Effect()
  followUser$: Observable<Action> = this.actions$.pipe(
    ofType<FollowUser>(ProfileActionTypes.FOLLOW_TO_USER),
    switchMap(({payload}) => this.profileService.followUser(payload)),
    switchMap((profile: fromSharedModels.Profile) => of(new FollowUserSuccess(profile))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { user: errorResponse.error.error };
      return of(new FollowUserFail(error));
    })
  );

  @Effect()
  unfollowUser$: Observable<Action> = this.actions$.pipe(
    ofType<UnfollowUser>(ProfileActionTypes.UNFOLLOW_FROM_USER),
    switchMap(({payload}) => this.profileService.unfollowUser(payload)),
    switchMap((profile: fromSharedModels.Profile) => of(new UnfollowUserSuccess(profile))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { user: errorResponse.error.error };
      return of(new UnfollowUserFail(error));
    })
  );

  constructor(
    private actions$: Actions,
    private profileService: fromProfileServices.ProfileService,
  ) { }
}
