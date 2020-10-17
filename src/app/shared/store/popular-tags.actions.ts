import { Action } from '@ngrx/store';

import * as fromSharedModels from '../models';

export enum PopularTagsActionsTypes {
  GET_POPULAR_TAGS = '[Popular tags] Get popular tags',
  GET_POPULAR_TAGS_SUCCESS = '[Popular tags] Get popular tags success',
  GET_POPULAR_TAGS_FAIL = '[Popular tags] Get popular tags fail',
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
}

export type PopularTagsActions =
  GetPopularTags |
  GetPopularTagsSuccess |
  GetPopularTagsFail;
