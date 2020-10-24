import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum ArticleActionsTypes {
  GET_ARTICLE = '[Article] Get article',
  GET_ARTICLE_SUCCESS = '[Article] Get article success',
  GET_ARTICLE_FAIL = '[Article] Get article fail',
  DELETE_ARTICLE = '[Article] Delete article',
  DELETE_ARTICLE_SUCCESS = '[Article] Delete article success',
  DELETE_ARTICLE_FAIL = '[Article] Delete article fail',
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

export type ArticleActions =
  GetArticle |
  GetArticleSuccess |
  GetArticleFail |
  DeleteArticle |
  DeleteArticleSuccess |
  DeleteArticleFail;
