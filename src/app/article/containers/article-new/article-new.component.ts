import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateArticle } from '../../store/article.actions';
import { getArticleErrors, getArticleIsLoading } from '../../store/article.selectors';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
})
export class ArticleNewComponent implements OnInit {
  initialValue: fromArticleModels.ArticleRequest;
  isLoading$: Observable<boolean>;
  errors$: Observable<fromSharedModels.BackendErrors>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(getArticleIsLoading));
    this.errors$ = this.store.pipe(select(getArticleErrors));
  }

  ngOnInit(): void {
    this.initialValue = {
      title: '',
      description: '',
      body: '',
      tagList: []
    };
  }

  createArticle(event: fromArticleModels.ArticleRequest): void {
    this.store.dispatch(new CreateArticle(event));
  }
}
