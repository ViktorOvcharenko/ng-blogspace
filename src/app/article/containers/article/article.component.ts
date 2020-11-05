import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  AddToFavorites,
  DeleteArticle,
  FollowArticleAuthor,
  GetArticle,
  RemoveFromFavorites,
  UnfollowArticleAuthor,
} from '../../store/article.actions';
import { GetComments } from '../../store/comments.actions';
import {
  getArticle,
  getArticleErrors,
  getArticleIsFavoriteLoading,
  getArticleIsFollowLoading,
  getArticleIsLoading,
} from '../../store/article.selectors';
import { getCurrentUser } from '../../../auth/store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';
import * as fromSharedComponents from '../../../shared/components';

@Component({
  selector: 'app-article-container',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isFollowLoading$: Observable<boolean>;
  isFavoriteLoading$: Observable<boolean>;
  article$: Observable<fromSharedModels.Article>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  isSelf$: Observable<boolean>;
  currentUser$: Observable<fromSharedModels.CurrentUser>;
  dialogRef: MatDialogRef<fromSharedComponents.ConfirmDialogComponent>;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.isLoading$ = this.store.pipe(select(getArticleIsLoading));
    this.isFollowLoading$ = this.store.pipe(select(getArticleIsFollowLoading));
    this.isFavoriteLoading$ = this.store.pipe(select(getArticleIsFavoriteLoading));
    this.article$ = this.store.pipe(select(getArticle));
    this.errors$ = this.store.pipe(select(getArticleErrors));
    this.currentUser$ = this.store.pipe(select(getCurrentUser));
    this.isSelf$ = combineLatest(this.article$, this.currentUser$)
      .pipe(
        map(([article, currentUser]) => {
          if (article && article.author && currentUser) {
            return article.author.username === currentUser.username;
          }
          return false;
        })
      );
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchData(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.store.dispatch(new GetArticle(params.slug))
        this.store.dispatch(new GetComments(params.slug))
      });
  }

  confirmDeleteArticle(event: string): void {
    this.dialogRef = this.dialog.open(
        fromSharedComponents.ConfirmDialogComponent,
        {
          width: '300px',
          data: {
            title: 'article.delete-article'
          }
        }
      );

    this.dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.deleteArticle(event);
        }
      });
  }

  deleteArticle(event: string): void {
    this.store.dispatch(new DeleteArticle(event));
  }

  follow(event: string): void {
    this.store.dispatch(new FollowArticleAuthor(event));
  }

  unfollow(event: string): void {
    this.store.dispatch(new UnfollowArticleAuthor(event));
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    if (event.isFavorite) {
      this.store.dispatch(new RemoveFromFavorites(event.slug));
    } else {
      this.store.dispatch(new AddToFavorites(event.slug));
    }
  }
}
