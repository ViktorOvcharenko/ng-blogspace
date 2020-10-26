import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {
  AddToFavorites,
  AddToFavoritesFail,
  AddToFavoritesSuccess,
  FeedActionsTypes,
  GetFeed,
  GetFeedFail,
  GetFeedSuccess,
  RemoveFromFavorites,
  RemoveFromFavoritesFail,
  RemoveFromFavoritesSuccess
} from './feed.actions';

import * as fromFeedServices from '../services';
import * as fromSharedServices from '../../shared/services';
import * as fromFeedModels from '../models';

@Injectable()
export class FeedEffects {
  @Effect()
  getFeed$: Observable<Action> = this.actions$.pipe(
    ofType<GetFeed>(FeedActionsTypes.GET_FEED),
    switchMap(({payload}) => this.feedService.getFeed(payload)),
    switchMap((feed: fromFeedModels.FeedResponse) => of(new GetFeedSuccess(feed))),
    catchError((errorResponse: HttpErrorResponse) => of(new GetFeedFail(errorResponse.error.errors)))
  );

  @Effect()
  addToFavorites$: Observable<Action> = this.actions$.pipe(
    ofType<AddToFavorites>(FeedActionsTypes.ADD_TO_FAVORITES),
    switchMap(({payload}) => this.addToFavorites.addToFavorites(payload)),
    switchMap((slug: string) => of(new AddToFavoritesSuccess(slug))),
    catchError((errorResponse: HttpErrorResponse) => of(new AddToFavoritesFail(errorResponse.error.errors)))
  );

  @Effect()
  removeFromFavorites$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveFromFavorites>(FeedActionsTypes.REMOVE_FROM_FAVORITES),
    switchMap(({payload}) => this.addToFavorites.removeFromFavorites(payload)),
    switchMap((slug: string) => of(new RemoveFromFavoritesSuccess(slug))),
    catchError((errorResponse: HttpErrorResponse) => of(new RemoveFromFavoritesFail(errorResponse.error.errors)))
  );

  constructor(
    private actions$: Actions,
    private feedService: fromFeedServices.FeedService,
    private addToFavorites: fromSharedServices.AddToFavoritesService,
  ) { }
}
