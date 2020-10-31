import * as fromSharedModels from '../../shared/models';

export interface PopularTagsState {
  isLoading: boolean;
  popularTags: fromSharedModels.Tag[];
  errors: fromSharedModels.BackendErrors;
  selectedTag: fromSharedModels.Tag
}
