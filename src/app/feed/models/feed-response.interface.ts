import * as fromSharedModels from '../../shared/models';

export interface FeedResponse {
  articles: fromSharedModels.Article[];
  articlesCount: number;
}
