import * as fromSharedModels from '../../shared/models';

export interface ArticleRequest {
  title: string;
  description: string;
  body: string;
  tagList: fromSharedModels.Tag[];
}
