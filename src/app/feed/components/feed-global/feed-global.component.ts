import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  get articles(): fromSharedModels.Article[] {
    return this.feed.articles;
  }
}
