import * as fromSharedModels from '../../shared/models';

export interface CommentsState {
  isLoading: boolean;
  comments: fromSharedModels.Comment[];
  errors: fromSharedModels.BackendErrors;
}
