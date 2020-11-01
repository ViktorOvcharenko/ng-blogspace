import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  AddToFavorites,
  AddToFavoritesFail,
  AddToFavoritesSuccess,
  ArticleActionsTypes,
  CreateArticle,
  CreateArticleFail,
  CreateArticleSuccess,
  DeleteArticle,
  DeleteArticleFail,
  DeleteArticleSuccess,
  FollowArticleAuthor,
  FollowArticleAuthorFail,
  FollowArticleAuthorSuccess,
  GetArticle,
  GetArticleFail,
  GetArticleSuccess,
  RemoveFromFavorites,
  RemoveFromFavoritesFail,
  RemoveFromFavoritesSuccess,
  UnfollowArticleAuthor,
  UnfollowArticleAuthorFail,
  UnfollowArticleAuthorSuccess,
  UpdateArticle,
  UpdateArticleFail,
  UpdateArticleSuccess,
} from './article.actions';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromArticleServices from '../services';
import * as fromSharedServices from '../../shared/services';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class ArticleEffects {
  @Effect()
  getArticle$: Observable<Action> = this.actions$.pipe(
    ofType<GetArticle>(ArticleActionsTypes.GET_ARTICLE),
    switchMap(({payload}) => this.articleService.getArticle(payload)),
    switchMap((article: fromSharedModels.Article) => of(new GetArticleSuccess(article))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { message: errorResponse.error.error };
      return of(new GetArticleFail(error));
    })
  );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteArticle>(ArticleActionsTypes.DELETE_ARTICLE),
    switchMap(({payload}) => this.articleService.deleteArticle(payload)),
    switchMap(() => {
      this.router.navigate(['/']);
      return of(new DeleteArticleSuccess());
    }),
    catchError((errorResponse: HttpErrorResponse) => of(new DeleteArticleFail(errorResponse.error.errors)))
  );

  @Effect()
  createArticle$: Observable<Action> = this.actions$.pipe(
    ofType<CreateArticle>(ArticleActionsTypes.CREATE_ARTICLE),
    switchMap(({payload}) => this.articleService.createArticle(payload)),
    switchMap((article: fromSharedModels.Article) => {
      this.router.navigate(['/article', article.slug, 'edit']);
      return of(new CreateArticleSuccess(article));
    }),
    catchError((errorResponse: HttpErrorResponse) => of(new CreateArticleFail(errorResponse.error.errors)))
  );

  @Effect()
  updateArticle$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateArticle>(ArticleActionsTypes.UPDATE_ARTICLE),
    switchMap(({payload}) => this.articleService.updateArticle(payload)),
    switchMap((article: fromSharedModels.Article) => {
      this.router.navigate(['/article', article.slug, 'edit']);
      return of(new UpdateArticleSuccess(article));
    }),
    catchError((errorResponse: HttpErrorResponse) => of(new UpdateArticleFail(errorResponse.error.errors)))
  );

  @Effect()
  followArticleAuthor$: Observable<Action> = this.actions$.pipe(
    ofType<FollowArticleAuthor>(ArticleActionsTypes.FOLLOW_TO_ARTICLE_AUTHOR),
    switchMap(({payload}) => this.articleService.followUser(payload)),
    switchMap((following: boolean) => of(new FollowArticleAuthorSuccess(following))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { user: errorResponse.error.error };
      return of(new FollowArticleAuthorFail(error));
    })
  );

  @Effect()
  unfollowArticleAuthor$: Observable<Action> = this.actions$.pipe(
    ofType<UnfollowArticleAuthor>(ArticleActionsTypes.UNFOLLOW_FROM_ARTICLE_AUTHOR),
    switchMap(({payload}) => this.articleService.unfollowUser(payload)),
    switchMap((following: boolean) => of(new UnfollowArticleAuthorSuccess(following))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { user: errorResponse.error.error };
      return of(new UnfollowArticleAuthorFail(error));
    })
  );

  @Effect()
  addToFavorites$: Observable<Action> = this.actions$.pipe(
    ofType<AddToFavorites>(ArticleActionsTypes.ADD_TO_FAVORITES),
    switchMap(({payload}) => this.addToFavorites.addToFavorites(payload)),
    switchMap((slug: string) => of(new AddToFavoritesSuccess(slug))),
    catchError((errorResponse: HttpErrorResponse) => of(new AddToFavoritesFail(errorResponse.error.errors)))
  );

  @Effect()
  removeFromFavorites$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveFromFavorites>(ArticleActionsTypes.REMOVE_FROM_FAVORITES),
    switchMap(({payload}) => this.addToFavorites.removeFromFavorites(payload)),
    switchMap((slug: string) => of(new RemoveFromFavoritesSuccess(slug))),
    catchError((errorResponse: HttpErrorResponse) => of(new RemoveFromFavoritesFail(errorResponse.error.errors)))
  );

  constructor(
    private actions$: Actions,
    private articleService: fromArticleServices.ArticleService,
    private addToFavorites: fromSharedServices.AddToFavoritesService,
    private router: Router,
  ) { }
}
