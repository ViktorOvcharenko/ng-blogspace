import * as fromSharedModels from '../../shared/models';

export interface ArticleState {
  isLoading: boolean;
  article: fromSharedModels.Article;
  errors: fromSharedModels.BackendErrors;
}
