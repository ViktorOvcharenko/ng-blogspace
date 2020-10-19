import * as fromSharedModels from '../../shared/models';

export interface PopularTagsState {
  isLoading: boolean;
  popularTags: fromSharedModels.Tag[];
  errors: string;
  selectedTag: fromSharedModels.Tag
}
