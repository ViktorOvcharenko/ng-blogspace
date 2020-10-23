import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GetArticle } from '../../store/article.actions';

@Component({
  selector: 'app-article-container',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit {
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

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
