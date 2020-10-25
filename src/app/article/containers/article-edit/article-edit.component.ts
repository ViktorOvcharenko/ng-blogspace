import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { CreateArticle, GetArticle } from '../../store/article.actions';
import {
  getArticle,
  getArticleErrors,
  getArticleIsLoading
} from '../../store/article.selectors';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
})
export class ArticleEditComponent implements OnInit {
  initialValue: fromArticleModels.ArticleRequest;
  article$: Observable<fromSharedModels.Article>;
  isLoading$: Observable<boolean>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(getArticleIsLoading));
    this.article$ = this.store.pipe(select(getArticle));
    this.errors$ = this.store.pipe(select(getArticleErrors));
  }

  ngOnInit(): void {
    this.fetchArticle();
    this.getInitialValue();
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

  getInitialValue(): void {
    this.article$
      .pipe(takeUntil(this.destroy$))
      .subscribe(article => {
      if (article) {
        const { title, description, body, tagList } = article;
        this.initialValue = { article: { title, description, body, tagList } };
      } else {
        this.initialValue = { article: { title: '', description: '', body: '', tagList: [] } };
      }
    });
  }

  createArticle(event: fromArticleModels.ArticleRequest): void {
    this.store.dispatch(new CreateArticle(event));
  }
}

