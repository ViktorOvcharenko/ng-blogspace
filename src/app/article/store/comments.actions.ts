import { Action } from '@ngrx/store';

import * as fromArticleModels from '../models'
import * as fromSharedModels from '../../shared/models';

export enum CommentsActionTypes {
  GET_COMMENTS = '[Comments] Get comments',
  GET_COMMENTS_SUCCESS = '[Comments] Get comments success',
  GET_COMMENTS_FAIL = '[Comments] Get comments fail',
  CREATE_COMMENT = '[Comments] Create comment',
  CREATE_COMMENT_SUCCESS = '[Comments] Create comment success',
  CREATE_COMMENT_FAIL = '[Comments] Create comment fail',
  DELETE_COMMENT = '[Comments] Delete comment',
  DELETE_COMMENT_SUCCESS = '[Comments] Delete comment success',
  DELETE_COMMENT_FAIL = '[Comments] Delete comment fail',
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

export class CreateComment implements Action {
  readonly type = CommentsActionTypes.CREATE_COMMENT;
  constructor(public payload: string) { }
}

export class CreateCommentSuccess implements Action {
  public readonly type = CommentsActionTypes.CREATE_COMMENT_SUCCESS;
  constructor(public payload: fromSharedModels.Comment) { }
}

export class CreateCommentFail implements Action {
  public readonly type = CommentsActionTypes.CREATE_COMMENT_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class DeleteComment implements Action {
  readonly type = CommentsActionTypes.DELETE_COMMENT;
  constructor(public payload: fromArticleModels.CommentDeleteRequest) { }
}

export class DeleteCommentSuccess implements Action {
  public readonly type = CommentsActionTypes.DELETE_COMMENT_SUCCESS;
  constructor(public payload: number) { }
}

export class DeleteCommentFail implements Action {
  public readonly type = CommentsActionTypes.DELETE_COMMENT_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type CommentsActions =
  GetComments |
  GetCommentsSuccess |
  GetCommentsFail |
  CreateComment |
  CreateCommentSuccess |
  CreateCommentFail |
  DeleteComment |
  DeleteCommentSuccess |
  DeleteCommentFail;
