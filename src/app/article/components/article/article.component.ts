import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent  {
  @Input() isLoading: boolean;
  @Input() isFollowLoading: boolean;
  @Input() article: fromSharedModels.Article;
  @Input() errors: fromSharedModels.BackendErrors;
  @Input() isSelf: boolean;
  @Output() onDeleteArticle: EventEmitter<string> = new EventEmitter<string>();
  @Output() onFollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnfollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

  get articleBody(): string {
    return this.article.body;
  }

  get tagList(): fromSharedModels.Tag[] {
    return this.article.tagList;
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
