import * as fromSharedModels from '../../shared/models';

export interface ArticleRequest {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: fromSharedModels.Tag[];
  }
}
