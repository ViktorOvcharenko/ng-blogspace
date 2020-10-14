import * as fromFeedModels from './';

export interface FeedState {
  isLoading: boolean;
  errors: string;
  feed: fromFeedModels.FeedResponse;
}
