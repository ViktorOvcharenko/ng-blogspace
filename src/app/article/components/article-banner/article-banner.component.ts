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

  deleteArticle(event: string): void {
    this.onDeleteArticle.emit(event);
  }

  follow(event: string): void {
    this.onFollow.emit(event);
  }

  unfollow(event: string): void {
    this.onUnfollow.emit(event);
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    this.onHandleLike.emit(event);
  }
}
