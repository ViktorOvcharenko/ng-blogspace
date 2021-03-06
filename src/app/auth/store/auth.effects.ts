import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  AuthActionsTypes,
  GetCurrentUser,
  GetCurrentUserFail,
  GetCurrentUserSuccess,
  Login,
  LoginFail,
  LoginSuccess,
  Logout,
  LogoutSuccess,
  Registration,
  RegistrationFail,
  RegistrationSuccess, SetCurrentLanguage, SetCurrentLanguageSuccess,
  UpdateCurrentUser,
  UpdateCurrentUserFail,
  UpdateCurrentUserSuccess
} from './auth.actions';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthServices from '../services';
import * as fromSharedServices from '../../shared/services';

@Injectable()
export class AuthEffects {
  @Effect()
  registration$: Observable<Action> = this.actions$.pipe(
    ofType<Registration>(AuthActionsTypes.REGISTRATION),
    switchMap(({ payload }) => this.authService.registration(payload)),
    switchMap((currentUser: fromSharedModels.CurrentUser) => {
      this.persistenceService.set('accessToken', currentUser.token);
      this.router.navigate(['/']);
      return of( new RegistrationSuccess(currentUser) )
    }),
    catchError((errorResponse: HttpErrorResponse) => of(new RegistrationFail(errorResponse.error.errors)))
  );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<Login>(AuthActionsTypes.LOGIN),
    switchMap(({ payload }) => this.authService.login(payload)),
    switchMap((currentUser: fromSharedModels.CurrentUser) => {
      this.persistenceService.set('accessToken', currentUser.token);
      this.router.navigate(['/']);
      return of( new LoginSuccess(currentUser) )
    }),
    catchError((errorResponse: HttpErrorResponse) => of(new LoginFail(errorResponse.error.errors)))
  );

  @Effect()
  getCurrentUser$: Observable<Action> = this.actions$.pipe(
    ofType<GetCurrentUser>(AuthActionsTypes.GET_CURRENT_USER),
    switchMap(() => this.authService.getCurrentUser()),
    switchMap((currentUser: fromSharedModels.CurrentUser) => of(new GetCurrentUserSuccess(currentUser))),
    catchError(() => of(new GetCurrentUserFail()))
  );

  @Effect()
  updateCurrentUser$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateCurrentUser>(AuthActionsTypes.UPDATE_CURRENT_USER),
    switchMap(({payload}) => this.authService.updateCurrentUser(payload)),
    switchMap((currentUser: fromSharedModels.CurrentUser) => of(new UpdateCurrentUserSuccess(currentUser))),
    catchError((errorResponse: HttpErrorResponse) => of(new UpdateCurrentUserFail(errorResponse.error.errors)))
  );

  @Effect()
  setCurrentLanguage$: Observable<Action> = this.actions$.pipe(
    ofType<SetCurrentLanguage>(AuthActionsTypes.SET_CURRENT_LANGUAGE),
    switchMap(({payload}) => {
      this.persistenceService.set('currentLanguage', payload);
      this.translateService.setDefaultLang(payload);
      return of(new SetCurrentLanguageSuccess(payload));
    })
  );

  @Effect()
  logout$: Observable<Action> = this.actions$.pipe(
    ofType<Logout>(AuthActionsTypes.LOGOUT),
    switchMap(() => {
      this.persistenceService.set('accessToken', '');
      this.router.navigate(['/']);
      return of(new LogoutSuccess());
    })
  );

  constructor(
    private actions$: Actions,
    private authService: fromAuthServices.AuthService,
    private persistenceService: fromSharedServices.PersistenceService,
    private router: Router,
    private translateService: TranslateService,
  ) { }
}
