import * as fromFeedModels from './';
import * as fromSharedModels from '../../shared/models';

export interface FeedState {
  isLoading: boolean;
  feed: fromFeedModels.FeedResponse;
  errors: fromSharedModels.BackendErrors;
}
