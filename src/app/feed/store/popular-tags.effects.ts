import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  GetPopularTags,
  GetPopularTagsSuccess,
  GetPopularTagsFail,
  PopularTagsActionsTypes,
} from './popular-tags.actions';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromFeedServices from '../services';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class PopularTagsEffects {
  @Effect()
  getPopularTags$: Observable<Action> = this.actions$.pipe(
    ofType<GetPopularTags>(PopularTagsActionsTypes.GET_POPULAR_TAGS),
    switchMap(() => this.popularTagsService.getPopularTags()),
    switchMap((popularTags: fromSharedModels.Tag[]) => of(new GetPopularTagsSuccess(popularTags))),
    catchError((errorResponse: HttpErrorResponse) => of(new GetPopularTagsFail(errorResponse.error.errors)))
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: fromFeedServices.PopularTagsService
  ) { }
}
