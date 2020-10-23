import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ArticleActionsTypes,
  GetArticle,
  GetArticleFail,
  GetArticleSuccess
} from './article.actions';

import * as fromArticleServices from '../services';
import * as fromSharedModels from '../../shared/models';


@Injectable()
export class ArticleEffects {
  @Effect()
  getArticle$: Observable<Action> = this.actions$.pipe(
    ofType<GetArticle>(ArticleActionsTypes.GET_ARTICLE),
    switchMap(({payload}) => this.articleService.getArticle(payload)),
    switchMap((article: fromSharedModels.Article) => of( new GetArticleSuccess(article) )),
    catchError((errorResponse: HttpErrorResponse) => of( new GetArticleFail() ))
  );

  constructor(
    private actions$: Actions,
    private articleService: fromArticleServices.ArticleService
  ) { }
}
