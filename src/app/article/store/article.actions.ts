import { Action } from '@ngrx/store';

import * as fromArticleModels from '../models';
import * as fromSharedModels from '../../shared/models';

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
  FOLLOW_TO_ARTICLE_AUTHOR = '[Article] Follow to article author',
  FOLLOW_TO_ARTICLE_AUTHOR_SUCCESS = '[Article] Follow to article author success',
  FOLLOW_TO_ARTICLE_AUTHOR_FAIL = '[Article] Follow to article author fail',
  UNFOLLOW_FROM_ARTICLE_AUTHOR = '[Article] Unfollow from article author',
  UNFOLLOW_FROM_ARTICLE_AUTHOR_SUCCESS = '[Article] Unfollow from article author success',
  UNFOLLOW_FROM_ARTICLE_AUTHOR_FAIL = '[Article] Unfollow from article author fail',
  ADD_TO_FAVORITES = '[Article] Add to favorites',
  ADD_TO_FAVORITES_SUCCESS = '[Article] Add to favorites success',
  ADD_TO_FAVORITES_FAIL = '[Article] Add to favorites fail',
  REMOVE_FROM_FAVORITES = '[Article] Remove from favorites',
  REMOVE_FROM_FAVORITES_SUCCESS = '[Article] Remove from favorites success',
  REMOVE_FROM_FAVORITES_FAIL = '[Article] Remove from favorites fail',
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

export class AddToFavorites implements Action {
  public readonly type = ArticleActionsTypes.ADD_TO_FAVORITES;
  constructor(public payload: string) { }
}

export class AddToFavoritesSuccess implements Action {
  public readonly type = ArticleActionsTypes.ADD_TO_FAVORITES_SUCCESS;
}

export class AddToFavoritesFail implements Action {
  public readonly type = ArticleActionsTypes.ADD_TO_FAVORITES_FAIL;
  constructor(public payload: fromSharedModels.BackendErrors) { }
}

export class RemoveFromFavorites implements Action {
  public readonly type = ArticleActionsTypes.REMOVE_FROM_FAVORITES;
  constructor(public payload: string) { }
}

export class RemoveFromFavoritesSuccess implements Action {
  public readonly type = ArticleActionsTypes.REMOVE_FROM_FAVORITES_SUCCESS;
}

export class RemoveFromFavoritesFail implements Action {
  public readonly type = ArticleActionsTypes.REMOVE_FROM_FAVORITES_FAIL;
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
  UnfollowArticleAuthorFail |
  AddToFavorites |
  AddToFavoritesSuccess |
  AddToFavoritesFail |
  RemoveFromFavorites |
  RemoveFromFavoritesSuccess |
  RemoveFromFavoritesFail;
