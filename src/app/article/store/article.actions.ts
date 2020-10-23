import { Action } from '@ngrx/store';

import * as fromSharedModels from '../../shared/models';

export enum ArticleActionsTypes {
  GET_ARTICLE = '[Article] Get article',
  GET_ARTICLE_SUCCESS = '[Article] Get article success',
  GET_ARTICLE_FAIL = '[Article] Get article fail',
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
}

export type ArticleActions =
  GetArticle |
  GetArticleSuccess |
  GetArticleFail;
