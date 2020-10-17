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

import * as fromSharedServices from '../services';
import * as fromSharedModels from '../models';

@Injectable()
export class PopularTagsEffects {
  @Effect()
  getPopularTags$: Observable<Action> = this.actions$.pipe(
    ofType<GetPopularTags>(PopularTagsActionsTypes.GET_POPULAR_TAGS),
    switchMap(() => this.popularTagsService.getPopularTags()),
    switchMap((popularTags: fromSharedModels.Tag[]) => of( new GetPopularTagsSuccess(popularTags) )),
    catchError(() => of( new GetPopularTagsFail() ))
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: fromSharedServices.PopularTagsService
  ) { }
}
