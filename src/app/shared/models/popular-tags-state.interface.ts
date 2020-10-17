import * as fromSharedModels from './';

export interface PopularTagsState {
  isLoading: boolean;
  popularTags: fromSharedModels.Tag[];
  errors: string;
}
