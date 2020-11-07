import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum CommentsActionTypes {
  GET_COMMENTS = '[Comments] Get comments',
  GET_COMMENTS_SUCCESS = '[Comments] Get comments success',
  GET_COMMENTS_FAIL = '[Comments] Get comments fail',
  DELETE_COMMENTS = '[Comments] Delete comment',
  DELETE_COMMENTS_SUCCESS = '[Comments] Delete comment success',
  DELETE_COMMENTS_FAIL = '[Comments] Delete comment fail',
}

export class GetComments implements Action {
  readonly type = CommentsActionTypes.GET_COMMENTS;
  constructor(public payload: string) { }
}

export class GetCommentsSuccess implements Action {
  public readonly type = CommentsActionTypes.GET_COMMENTS_SUCCESS;
  constructor(public payload: fromSharedModels.Comment[]) { }
}

export class GetCommentsFail implements Action {
  public readonly type = CommentsActionTypes.GET_COMMENTS_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type CommentsActions =
  GetComments |
  GetCommentsSuccess |
  GetCommentsFail;
