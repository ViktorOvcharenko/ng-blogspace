import { getComments, getCommentsErrors, getCommentsIsLoading } from './comments.selectors';
import { initialCommentsState } from './comments.store';

import * as fromTestModels from '../../test/models';

describe('CommentsSelectors', () => {
  const appState = fromTestModels.appStateMock;
  const initialState = { ...initialCommentsState };

  it('should get the isLoading', () => {
    expect(getCommentsIsLoading(appState)).toBe(initialState.isLoading);
  });

  it('should get the comments', () => {
    expect(getComments(appState)).toBe(initialState.comments);
  });

  it('should get the errors', () => {
    expect(getCommentsErrors(appState)).toBe(initialState.errors);
  });
});
