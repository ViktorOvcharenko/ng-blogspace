import * as fromSharedModels from '../../shared/models';

export const articleMock: fromSharedModels.Article = {
  author: {
    username: 'test',
    following: false,
  },
  body: 'test',
  createdAt: '2020',
  description: 'test',
  favorited: false,
  favoritesCount: 0,
  slug: 'test',
  tagList: [],
  title: 'test',
  updatedAt: '2020',
};
