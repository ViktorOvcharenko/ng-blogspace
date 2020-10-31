import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum PopularTagsActionsTypes {
  GET_POPULAR_TAGS = '[Popular tags] Get popular tags',
  GET_POPULAR_TAGS_SUCCESS = '[Popular tags] Get popular tags success',
  GET_POPULAR_TAGS_FAIL = '[Popular tags] Get popular tags fail',
  SET_SELECTED_TAG = '[Popular tags] Set selected tag',
  CLEAR_SELECTED_TAG = '[Popular tags] Clear selected tag',
}

export class GetPopularTags implements Action {
  public readonly type = PopularTagsActionsTypes.GET_POPULAR_TAGS;
}

export class GetPopularTagsSuccess implements Action {
  public readonly type = PopularTagsActionsTypes.GET_POPULAR_TAGS_SUCCESS;
  constructor(public payload: fromSharedModels.Tag[]) { }
}

export class GetPopularTagsFail implements Action {
  public readonly type = PopularTagsActionsTypes.GET_POPULAR_TAGS_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class SetSelectedTag implements Action {
  public readonly type = PopularTagsActionsTypes.SET_SELECTED_TAG;
  constructor(public payload: fromSharedModels.Tag) { }
}

export class ClearSelectedTag implements Action {
  public readonly type = PopularTagsActionsTypes.CLEAR_SELECTED_TAG;
}

export type PopularTagsActions =
  GetPopularTags |
  GetPopularTagsSuccess |
  GetPopularTagsFail |
  SetSelectedTag |
  ClearSelectedTag;
