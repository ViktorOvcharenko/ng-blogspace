import { Action } from '@ngrx/store';

import * as fromFeedModels from '../models';
import * as fromSharedModels from '../../shared/models';

export enum FeedActionsTypes {
  GET_FEED = '[Feed] Get feed',
  GET_FEED_SUCCESS = '[Feed] Get feed success',
  GET_FEED_FAIL = '[Feed] Get feed fail',
}

export class GetFeed implements Action {
  public readonly type = FeedActionsTypes.GET_FEED;
  constructor(public payload: string) { }
}

export class GetFeedSuccess implements Action {
  public readonly type = FeedActionsTypes.GET_FEED_SUCCESS;
  constructor(public payload: fromFeedModels.FeedResponse) { }
}

export class GetFeedFail implements Action {
  public readonly type = FeedActionsTypes.GET_FEED_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) {
  }
}

export type FeedActions =
  GetFeed |
  GetFeedSuccess |
  GetFeedFail;
