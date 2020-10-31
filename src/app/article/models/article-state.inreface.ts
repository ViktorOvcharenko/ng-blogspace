import * as fromSharedModels from '../../shared/models';

export interface ArticleState {
  isLoading: boolean;
  isFollowLoading: boolean;
  article: fromSharedModels.Article;
  errors: fromSharedModels.BackendErrors;
}
