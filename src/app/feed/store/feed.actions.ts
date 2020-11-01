import { Action } from '@ngrx/store';

import * as fromFeedModels from '../models';
import * as fromSharedModels from '../../shared/models';

export enum FeedActionsTypes {
  GET_FEED = '[Feed] Get feed',
  GET_FEED_SUCCESS = '[Feed] Get feed success',
  GET_FEED_FAIL = '[Feed] Get feed fail',
  ADD_TO_FAVORITES = '[Feed] Add to favorites',
  ADD_TO_FAVORITES_SUCCESS = '[Feed] Add to favorites success',
  ADD_TO_FAVORITES_FAIL = '[Feed] Add to favorites fail',
  REMOVE_FROM_FAVORITES = '[Feed] Remove from favorites',
  REMOVE_FROM_FAVORITES_SUCCESS = '[Feed] Remove from favorites success',
  REMOVE_FROM_FAVORITES_FAIL = '[Feed] Remove from favorites fail',
}

export class GetFeed implements Action {
  public readonly type = FeedActionsTypes.GET_FEED;
  constructor(public payload: fromFeedModels.FeedRequest) { }
}

export class GetFeedSuccess implements Action {
  public readonly type = FeedActionsTypes.GET_FEED_SUCCESS;
  constructor(public payload: fromFeedModels.FeedResponse) { }
}

export class GetFeedFail implements Action {
  public readonly type = FeedActionsTypes.GET_FEED_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}
export class AddToFavorites implements Action {
  public readonly type = FeedActionsTypes.ADD_TO_FAVORITES;
  constructor(public payload: string) { }
}

export class AddToFavoritesSuccess implements Action {
  public readonly type = FeedActionsTypes.ADD_TO_FAVORITES_SUCCESS;
  constructor(public payload: string) { }
}

export class AddToFavoritesFail implements Action {
  public readonly type = FeedActionsTypes.ADD_TO_FAVORITES_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class RemoveFromFavorites implements Action {
  public readonly type = FeedActionsTypes.REMOVE_FROM_FAVORITES;
  constructor(public payload: string) { }
}

export class RemoveFromFavoritesSuccess implements Action {
  public readonly type = FeedActionsTypes.REMOVE_FROM_FAVORITES_SUCCESS;
  constructor(public payload: string) { }
}

export class RemoveFromFavoritesFail implements Action {
  public readonly type = FeedActionsTypes.REMOVE_FROM_FAVORITES_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type FeedActions =
  GetFeed |
  GetFeedSuccess |
  GetFeedFail |
  AddToFavorites |
  AddToFavoritesSuccess |
  AddToFavoritesFail |
  RemoveFromFavorites |
  RemoveFromFavoritesSuccess |
  RemoveFromFavoritesFail;
