import { Component, Input } from '@angular/core';

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

  get title(): string {
    return this.article.title;
  }

  get username(): string {
    return this.article.author.username;
  }

  get image(): string {
    return this.article.author.image;
  }

  get slug(): string {
    return this.article.slug;
  }

  get articleBody(): string {
    return this.article.body;
  }

  get tagList(): fromSharedModels.Tag[] {
    return this.article.tagList;
  }
}
