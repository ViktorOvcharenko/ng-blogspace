import * as fromAuthModels from '../../auth/models';
import * as fromFeedModels from '../../feed/models';
import * as fromArticleModels from '../../article/models';
import * as fromAProfileModels from '../../profile/models';

export interface AppState {
  auth: fromAuthModels.AuthState;
  article: fromArticleModels.ArticleState;
  comments: fromArticleModels.CommentsState;
  feed: fromFeedModels.FeedState;
  popularTags: fromFeedModels.PopularTagsState;
  profile: fromAProfileModels.ProfileState;
}
