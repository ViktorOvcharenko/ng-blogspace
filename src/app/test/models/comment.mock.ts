import * as fromSharedModels from '../../shared/models';

export const commentMock: fromSharedModels.Comment = {
  author: {
    username: 'test',
    following: false,
  },
  body: 'test',
  createdAt: '2020',
  id: 0,
  updatedAt: '2020',
}
