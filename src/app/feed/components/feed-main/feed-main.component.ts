import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromFeedModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-feed-main',
  templateUrl: './feed-main.component.html',
  styleUrls: ['./feed-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedMainComponent {
  @Input() isLoading: boolean;
  @Input() feed: fromFeedModels.FeedResponse;
  @Input() errors: fromSharedModels.BackendErrors;
  @Input() url: string[];
  @Output() onSelectPage: EventEmitter<fromSharedModels.PaginationParams> = new EventEmitter<fromSharedModels.PaginationParams>();
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

  get isFeed(): boolean {
    return !!this.feed;
  }

  get isArticles(): boolean {
    return !!this.feed.articles.length;
  }

  get articles(): fromSharedModels.Article[] {
    return this.feed && this.feed.articles;
  }

  get total(): number {
    return this.feed && this.feed.articlesCount;
  }

  selectPage($event: fromSharedModels.PaginationParams) {
    this.onSelectPage.emit($event);
  }

  handleLike(event: fromSharedModels.AddToFavorites): void {
    this.onHandleLike.emit(event);
  }
}
