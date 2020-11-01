import * as fromSharedModels from '../../shared/models';

export interface ArticleState {
  isLoading: boolean;
  isBtnLoading: boolean;
  article: fromSharedModels.Article;
  errors: fromSharedModels.BackendErrors;
}
