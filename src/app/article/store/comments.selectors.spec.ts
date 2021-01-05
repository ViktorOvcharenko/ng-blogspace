import { getComments, getCommentsErrors, getCommentsIsLoading } from './comments.selectors';
import { initialCommentsState } from './comments.store';

import * as fromTestModels from '../../test/models';

describe('CommentsSelectors', () => {
  const appState = fromTestModels.appStateMock;
  const initialState = { ...initialCommentsState };

  describe('getCommentsIsLoading', () => {
    it('should get the isLoading', () => {
      expect(getCommentsIsLoading(appState)).toEqual(initialState.isLoading);
    });
  });

  describe('getComments', () => {
    it('should get the comments', () => {
      expect(getComments(appState)).toEqual(initialState.comments);
    });
  });

  describe('getCommentsErrors', () => {
    it('should get the errors', () => {
      expect(getCommentsErrors(appState)).toEqual(initialState.errors);
    });
  });
});
