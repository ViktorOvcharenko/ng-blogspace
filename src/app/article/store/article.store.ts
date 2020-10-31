import * as fromArticleModels from '../models';

export const initialArticleState: fromArticleModels.ArticleState = {
  isLoading: false,
  isFollowLoading: false,
  article: null,
  errors: null,
};
