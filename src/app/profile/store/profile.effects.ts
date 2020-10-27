import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  GetProfile,
  GetProfileFail,
  GetProfileSuccess,
  ProfileActionTypes
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
      const error: fromSharedModels.BackendErrors = { message: errorResponse.error.error };
      return of(new GetProfileFail(error));
    })
  );

  constructor(
    private actions$: Actions,
    private profileService: fromProfileServices.ProfileService,
  ) { }
}
