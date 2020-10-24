import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { GetArticle } from '../../store/article.actions';
import {
  getArticle,
  getArticleErrors,
  getArticleIsLoading
} from '../../store/article.selectors';
import { getCurrentUser } from '../../../auth/store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-container',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  isLoading$: Observable<boolean>;
  article$: Observable<fromSharedModels.Article>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  isAuthor$: Observable<boolean>;
  currentUser$: Observable<fromSharedModels.CurrentUser>
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.isLoading$ = this.store.pipe(select(getArticleIsLoading));
    this.article$ = this.store.pipe(select(getArticle));
    this.errors$ = this.store.pipe(select(getArticleErrors));
    this.currentUser$ = this.store.pipe(select(getCurrentUser));
    this.isAuthor$ = combineLatest(this.article$, this.currentUser$)
      .pipe(map(([article, currentUser]) => {
        if (article && article.author&& currentUser) {
          return article.author.username === currentUser.username;
        }
        return false;
      }));
  }

  ngOnInit(): void {
    this.fetchArticle();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchArticle(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.store.dispatch(new GetArticle(params.slug))
      });
  }
}
