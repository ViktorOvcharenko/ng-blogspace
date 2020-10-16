import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromFeedModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-feed-global',
  templateUrl: './feed-global.component.html',
  styleUrls: ['./feed-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedGlobalComponent {
  @Input() isLoading: boolean;
  @Input() feed: fromFeedModels.FeedResponse;
  @Input() errors: fromSharedModels.BackendErrors;
  @Output() onSelectPage: EventEmitter<fromSharedModels.PaginationParams> = new EventEmitter<fromSharedModels.PaginationParams>();

  get articles(): fromSharedModels.Article[] {
    return this.feed.articles;
  }

  get total(): number {
    return this.feed.articlesCount;
  }

  selectPage($event: fromSharedModels.PaginationParams) {
    this.onSelectPage.emit($event);
  }
}
