import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { GetArticle, UpdateArticle } from '../../store/article.actions';
import {
  getArticle,
  getArticleErrors,
  getArticleIsLoading
} from '../../store/article.selectors';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-edit-container',
  templateUrl: './article-edit.component.html',
})
export class ArticleEditComponent implements OnInit {
  initialValue: fromArticleModels.ArticleRequest;
  article$: Observable<fromSharedModels.Article>;
  isLoading$: Observable<boolean>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  slug: string;
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
      .pipe(
        filter(Boolean),
        takeUntil(this.destroy$)
      )
      .subscribe(article => {
        const { title, description, body, tagList, slug } = (article as fromSharedModels.Article);
        this.initialValue = { article: { title, description, body, tagList } };
        this.slug = slug;
    });
  }

  updateArticle(requestDate: fromArticleModels.ArticleRequest): void {
    requestDate.slug = this.slug;
    this.store.dispatch(new UpdateArticle(requestDate));
  }
}

