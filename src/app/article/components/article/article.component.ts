import { Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent  {
  @Input() isLoading: boolean;
  @Input() article: fromSharedModels.Article;
  @Input() errors: fromSharedModels.BackendErrors;
  @Input() isAuthor: boolean;
  @Output() onDeleteArticle: EventEmitter<string> = new EventEmitter<string>();

  get articleBody(): string {
    return this.article.body;
  }

  get tagList(): fromSharedModels.Tag[] {
    return this.article.tagList;
  }

  deleteArticle(event: string): void {
    this.onDeleteArticle.emit(event);
  }
}
