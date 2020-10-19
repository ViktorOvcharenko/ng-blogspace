import * as fromFeedModels from '../models';

export const initialPopularTagsState: fromFeedModels.PopularTagsState  = {
  isLoading: false,
  popularTags: null,
  errors: null,
  selectedTag: null,
};
