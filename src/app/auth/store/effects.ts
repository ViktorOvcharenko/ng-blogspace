import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  AuthActionsTypes,
  Registration,
  RegistrationFail,
  RegistrationSuccess
} from './actions';
import {HttpErrorResponse} from '@angular/common/http';

import * as fromModels from '../../shared/models';
import * as fromAuthServices from '../services';

@Injectable()
export class AuthEffects {
  @Effect()
  registration$: Observable<Action> = this.actions$.pipe(
    ofType<Registration>(AuthActionsTypes.REGISTRATION),
    switchMap(({ payload }) => this.authService.registration(payload)),
    switchMap((currentUser: fromModels.CurrentUser) => of(new RegistrationSuccess(currentUser))),
    catchError((errorResponse: HttpErrorResponse) => of(new RegistrationFail(errorResponse.error.errors)))
  );

  constructor(
    private actions$: Actions,
    private authService: fromAuthServices.AuthService
  ) { }
}
