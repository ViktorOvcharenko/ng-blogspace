import * as fromSharedModels from '../../shared/models';

export interface ArticleState {
  isLoading: boolean;
  isFollowLoading: boolean;
  isFavoriteLoading: boolean;
  article: fromSharedModels.Article;
  errors: fromSharedModels.BackendErrors;
}
