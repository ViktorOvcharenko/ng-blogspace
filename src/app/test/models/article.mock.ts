import * as fromSharedModels from '../../shared/models';

export const articleMock: fromSharedModels.Article = {
  author: {
    following: false,
    username: 'test'
  },
  body: 'test',
  createdAt: 'test',
  description: 'test',
  favorited: false,
  favoritesCount: 0,
  slug: 'test',
  tagList: [],
  title: 'test',
  updatedAt: 'test',
};
