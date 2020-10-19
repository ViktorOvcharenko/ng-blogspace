import * as fromAuthModels from '../../auth/models';
import * as fromFeedModels from '../../feed/models';

export interface AppState {
  auth: fromAuthModels.AuthState;
  feed: fromFeedModels.FeedState;
  popularTags: fromFeedModels.PopularTagsState;
}
