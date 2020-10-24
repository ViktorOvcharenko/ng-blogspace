import { Component, Input } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.scss']
})
export class ArticleBannerComponent  {
  @Input() article: fromSharedModels.Article;
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
}
