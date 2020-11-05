import * as fromSharedModels from './';

export interface Comment {
  author: fromSharedModels.Profile;
  body: string;
  createdAt: string;
  id: number;
  updatedAt: string;
}
