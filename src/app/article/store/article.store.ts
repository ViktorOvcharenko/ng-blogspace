import * as fromArticleModels from '../models';

export const initialArticleState: fromArticleModels.ArticleState = {
  isLoading: false,
  isBtnLoading: false,
  article: null,
  errors: null,
};
