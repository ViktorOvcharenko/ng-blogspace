import * as fromSharedModels from '../../shared/models';

export interface FeedRequest {
  url: string;
  paginationParams: fromSharedModels.PaginationParams,
  tagParam?: fromSharedModels.Tag,
}
