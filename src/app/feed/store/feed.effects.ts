import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FeedActionsTypes,
  GetFeed,
  GetFeedFail,
  GetFeedSuccess
} from './feed.actions';

import * as fromFeedServices from '../services';
import * as fromFeedModels from '../models';

@Injectable()
export class FeedEffects {
  @Effect()
  getFeed$: Observable<Action> = this.actions$.pipe(
    ofType<GetFeed>(FeedActionsTypes.GET_FEED),
    switchMap(({payload}) => this.feedService.getFeed(payload)),
    switchMap((feed: fromFeedModels.FeedResponse) => of( new GetFeedSuccess(feed) )),
    catchError((errorResponse: HttpErrorResponse) => of( new GetFeedFail(errorResponse.error.errors) ))
  );

  constructor(
    private actions$: Actions,
    private feedService: fromFeedServices.FeedService
  ) { }
}
