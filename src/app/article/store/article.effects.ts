import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  ArticleActionsTypes,
  CreateArticle,
  CreateArticleFail,
  CreateArticleSuccess,
  DeleteArticle,
  DeleteArticleFail,
  DeleteArticleSuccess,
  GetArticle,
  GetArticleFail,
  GetArticleSuccess,
  UpdateArticle,
  UpdateArticleFail,
  UpdateArticleSuccess,
} from './article.actions';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromArticleServices from '../services';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class ArticleEffects {
  @Effect()
  getArticle$: Observable<Action> = this.actions$.pipe(
    ofType<GetArticle>(ArticleActionsTypes.GET_ARTICLE),
    switchMap(({payload}) => this.articleService.getArticle(payload)),
    switchMap((article: fromSharedModels.Article) => of( new GetArticleSuccess(article) )),
    catchError((errorResponse: HttpErrorResponse) => of( new GetArticleFail(errorResponse.error.errors) ))
  );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteArticle>(ArticleActionsTypes.DELETE_ARTICLE),
    switchMap(({payload}) => this.articleService.deleteArticle(payload)),
    switchMap(() => {
      this.router.navigate(['/']);
      return of( new DeleteArticleSuccess() )
    }),
    catchError((errorResponse: HttpErrorResponse) => of( new DeleteArticleFail(errorResponse.error.errors) ))
  );

  @Effect()
  createArticle$: Observable<Action> = this.actions$.pipe(
    ofType<CreateArticle>(ArticleActionsTypes.CREATE_ARTICLE),
    switchMap(({payload}) => this.articleService.createArticle(payload)),
    switchMap((article: fromSharedModels.Article) => {
      this.router.navigate(['/article', article.slug, 'edit']);
      return of( new CreateArticleSuccess(article) )
    }),
    catchError((errorResponse: HttpErrorResponse) => of( new CreateArticleFail(errorResponse.error.errors) ))
  );

  @Effect()
  updateArticle$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateArticle>(ArticleActionsTypes.UPDATE_ARTICLE),
    switchMap(({payload}) => this.articleService.updateArticle(payload)),
    switchMap((article: fromSharedModels.Article) => {
      this.router.navigate(['/article', article.slug, 'edit']);
      return of( new UpdateArticleSuccess(article) )
    }),
    catchError((errorResponse: HttpErrorResponse) => of( new UpdateArticleFail(errorResponse.error.errors) ))
  );

  constructor(
    private actions$: Actions,
    private articleService: fromArticleServices.ArticleService,
    private router: Router,
  ) { }
}
