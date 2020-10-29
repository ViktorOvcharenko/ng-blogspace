import * as fromSharedModels from '../../shared/models';

export interface FeedRequest {
  url: string;
  paginationParams: fromSharedModels.PaginationParams,
  tag?: fromSharedModels.Tag,
  favorited?: string,
  author?: string,
}
