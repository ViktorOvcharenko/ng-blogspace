import * as fromFeedModels from '../models';

export const initialFeedState: fromFeedModels.FeedState = {
  isLoading: false,
  isBtnLoading: false,
  feed: null,
  errors: null,
};
