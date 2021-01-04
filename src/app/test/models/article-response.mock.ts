import * as fromArticleModels from '../../article/models';

export const articleResponseMock: fromArticleModels.ArticleResponse = {
  article: {
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
  }
};
