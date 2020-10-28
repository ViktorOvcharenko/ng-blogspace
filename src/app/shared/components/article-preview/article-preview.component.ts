import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePreviewComponent  {
  @Input() article: fromSharedModels.Article;
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

  get username(): string {
    return this.article.author.username;
  }

  get image(): string {
    return this.article.author.image;
  }

  get createdAt(): string {
    return this.article.createdAt;
  }

  get favorited(): boolean {
    return this.article.favorited;
  }

  get favoritesCount(): number {
    return this.article.favoritesCount;
  }

  get slug(): string {
    return this.article.slug;
  }

  get title(): string {
    return this.article.title;
  }

  get description(): string {
    return this.article.description;
  }

  get tagList(): fromSharedModels.Tag[] {
    return this.article.tagList;
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    this.onHandleLike.emit(event);
  }
}
