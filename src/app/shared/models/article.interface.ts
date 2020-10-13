import * as fromSharedModels from './';

export interface Article {
  author: fromSharedModels.Profile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[]
  title: string;
  updatedAt: string;
}
