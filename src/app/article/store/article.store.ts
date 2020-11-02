import * as fromArticleModels from '../models';

export const initialArticleState: fromArticleModels.ArticleState = {
  isLoading: false,
  isFollowLoading: false,
  isFavoriteLoading: false,
  article: null,
  errors: null,
};
