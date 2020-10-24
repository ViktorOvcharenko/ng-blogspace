import * as fromSharedModels from './';

export interface Article {
  author: fromSharedModels.Profile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: fromSharedModels.Tag[]
  title: string;
  updatedAt: string;
}
