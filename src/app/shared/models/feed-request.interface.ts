import * as fromSharedModels from './';

export interface FeedRequest {
  url: string;
  paginationParams: fromSharedModels.PaginationParams
}
