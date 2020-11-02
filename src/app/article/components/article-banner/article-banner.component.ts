import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleBannerComponent  {
  @Input() article: fromSharedModels.Article;
  @Input() isSelf: boolean;
  @Input() isFollowLoading: boolean;
  @Input() isFavoriteLoading: boolean;
  @Output() onDeleteArticle: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnfollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

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

  get isFollow(): boolean {
    return !this.article.author.following;
  }

  get isFavorited(): boolean {
    return this.article.favorited;
  }

  get favoritesCount(): number {
    return this.article.favoritesCount;
  }

  deleteArticle(): void {
    this.onDeleteArticle.emit(this.slug);
  }

  follow(): void {
    this.onFollow.emit(this.article.author.username);
  }

  unfollow(): void {
    this.onUnfollow.emit(this.article.author.username);
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    this.onHandleLike.emit(event);
  }
}
