import * as fromArticleModels from '../models';

export const initialCommentsState: fromArticleModels.CommentsState = {
  isLoading: false,
  comments: [],
  errors: null,
};
