import { Action } from '@ngrx/store';

import * as fromArticleModels from '../models';
import * as fromSharedModels from '../../shared/models';
import {ProfileActionTypes} from '../../profile/store/profiel.actions';

export enum ArticleActionsTypes {
  GET_ARTICLE = '[Article] Get article',
  GET_ARTICLE_SUCCESS = '[Article] Get article success',
  GET_ARTICLE_FAIL = '[Article] Get article fail',
  DELETE_ARTICLE = '[Article] Delete article',
  DELETE_ARTICLE_SUCCESS = '[Article] Delete article success',
  DELETE_ARTICLE_FAIL = '[Article] Delete article fail',
  CREATE_ARTICLE = '[Article] Create article',
  CREATE_ARTICLE_SUCCESS = '[Article] Create article success',
  CREATE_ARTICLE_FAIL = '[Article] Create article fail',
  UPDATE_ARTICLE = '[Article] Update article',
  UPDATE_ARTICLE_SUCCESS = '[Article] Update article success',
  UPDATE_ARTICLE_FAIL = '[Article] Update article fail',
  FOLLOW_TO_ARTICLE_AUTHOR = '[Profile] Follow to article author',
  FOLLOW_TO_ARTICLE_AUTHOR_SUCCESS = '[Profile] Follow to article author success',
  FOLLOW_TO_ARTICLE_AUTHOR_FAIL = '[Profile] Follow to article author fail',
  UNFOLLOW_FROM_ARTICLE_AUTHOR = '[Profile] Unfollow from article author',
  UNFOLLOW_FROM_ARTICLE_AUTHOR_SUCCESS = '[Profile] Unfollow from article author success',
  UNFOLLOW_FROM_ARTICLE_AUTHOR_FAIL = '[Profile] Unfollow from article author fail',
}

export class GetArticle implements Action {
  public readonly type = ArticleActionsTypes.GET_ARTICLE;
  constructor(public payload: string) { }
}

export class GetArticleSuccess implements Action {
  public readonly type = ArticleActionsTypes.GET_ARTICLE_SUCCESS;
  constructor(public payload: fromSharedModels.Article) { }
}

export class GetArticleFail implements Action {
  public readonly type = ArticleActionsTypes.GET_ARTICLE_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}
export class DeleteArticle implements Action {
  public readonly type = ArticleActionsTypes.DELETE_ARTICLE;
  constructor(public payload: string) { }
}

export class DeleteArticleSuccess implements Action {
  public readonly type = ArticleActionsTypes.DELETE_ARTICLE_SUCCESS;
}

export class DeleteArticleFail implements Action {
  public readonly type = ArticleActionsTypes.DELETE_ARTICLE_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class CreateArticle implements Action {
  public readonly type = ArticleActionsTypes.CREATE_ARTICLE;
  constructor(public payload: fromArticleModels.ArticleRequest) { }
}

export class CreateArticleSuccess implements Action {
  public readonly type = ArticleActionsTypes.CREATE_ARTICLE_SUCCESS;
  constructor(public payload: fromSharedModels.Article) { }
}

export class CreateArticleFail implements Action {
  public readonly type = ArticleActionsTypes.CREATE_ARTICLE_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class UpdateArticle implements Action {
  public readonly type = ArticleActionsTypes.UPDATE_ARTICLE;
  constructor(public payload: fromArticleModels.ArticleRequest) { }
}

export class UpdateArticleSuccess implements Action {
  public readonly type = ArticleActionsTypes.UPDATE_ARTICLE_SUCCESS;
  constructor(public payload: fromSharedModels.Article) { }
}

export class UpdateArticleFail implements Action {
  public readonly type = ArticleActionsTypes.UPDATE_ARTICLE_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class FollowArticleAuthor implements Action {
  public readonly type = ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR;
  constructor(public payload: string) { }
}

export class FollowArticleAuthorSuccess implements Action {
  public readonly type = ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR_SUCCESS;
  constructor(public payload: boolean) { }
}

export class FollowArticleAuthorFail implements Action {
  public readonly type = ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class UnfollowArticleAuthor implements Action {
  public readonly type = ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR;
  constructor(public payload: string) { }
}

export class UnfollowArticleAuthorSuccess implements Action {
  public readonly type = ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR_SUCCESS;
  constructor(public payload: boolean) { }
}

export class UnfollowArticleAuthorFail implements Action {
  public readonly type = ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export type ArticleActions =
  GetArticle |
  GetArticleSuccess |
  GetArticleFail |
  DeleteArticle |
  DeleteArticleSuccess |
  DeleteArticleFail |
  CreateArticle |
  CreateArticleSuccess |
  CreateArticleFail |
  UpdateArticle |
  UpdateArticleSuccess |
  UpdateArticleFail |
  FollowArticleAuthor |
  FollowArticleAuthorSuccess |
  FollowArticleAuthorFail |
  UnfollowArticleAuthor |
  UnfollowArticleAuthorSuccess |
  UnfollowArticleAuthorFail;
