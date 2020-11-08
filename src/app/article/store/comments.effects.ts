import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  CommentsActionTypes, CreateComment, CreateCommentFail, CreateCommentSuccess, DeleteComment, DeleteCommentFail, DeleteCommentSuccess,
  GetComments,
  GetCommentsFail,
  GetCommentsSuccess
} from './comments.actions';
import { HttpErrorResponse } from '@angular/common/http';

import * as fromArticleServices from '../services';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class CommentsEffects {
  @Effect()
  getComments$: Observable<Action> = this.actions$.pipe(
    ofType<GetComments>(CommentsActionTypes.GET_COMMENTS),
    switchMap(({payload}) => this.commentsService.getComments(payload)),
    switchMap((comments: fromSharedModels.Comment[]) => of(new GetCommentsSuccess(comments))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { message: errorResponse.error.error };
      return of(new GetCommentsFail(error));
    })
  );

  @Effect()
  createComment$: Observable<Action> = this.actions$.pipe(
    ofType<CreateComment>(CommentsActionTypes.CREATE_COMMENT),
    switchMap(({payload}) => this.commentsService.createComment(payload)),
    switchMap((comment: fromSharedModels.Comment) => of(new CreateCommentSuccess(comment))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { message: errorResponse.error.error };
      return of(new CreateCommentFail(error));
    })
  );

  @Effect()
  deleteComment$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteComment>(CommentsActionTypes.DELETE_COMMENT),
    switchMap(({payload}) => this.commentsService.deleteComment(payload)),
    switchMap((id: number) => of(new DeleteCommentSuccess(id))),
    catchError((errorResponse: HttpErrorResponse) => {
      const error: fromSharedModels.BackendErrors = { message: errorResponse.error.error };
      return of(new DeleteCommentFail(error));
    })
  );

  constructor(
    private actions$: Actions,
    private commentsService: fromArticleServices.CommentsService,
  ) { }
}
