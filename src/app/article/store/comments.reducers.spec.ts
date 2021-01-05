import { initialCommentsState } from './comments.store';
import { commentsReducers } from './comments.reducers';
import {
  CreateComment,
  CreateCommentFail,
  CreateCommentSuccess,
  DeleteComment,
  DeleteCommentFail,
  DeleteCommentSuccess,
  GetComments,
  GetCommentsFail,
  GetCommentsSuccess
} from './comments.actions';

import * as fromTestModels from '../../test/models';

describe('CommentsReducers', () => {
  const initialState = { ...initialCommentsState };

  describe('GetComments', () => {
    it('should set isLoading to true and clear errors', () => {
      const payload = 'test';
      const action = new GetComments(payload);
      const state = commentsReducers(initialState, action);

      expect(state.isLoading).toBeTrue();
      expect(state.errors).toBeNull();
    });
  });

  describe('GetCommentsSuccess', () => {
    it('should set isLoading to false and set comments', () => {
      const payload = [fromTestModels.commentMock];
      const action = new GetCommentsSuccess(payload);
      const state = commentsReducers(initialState, action);

      expect(state.isLoading).toBeFalse();
      expect(state.comments).toEqual(payload);
    });
  });

  describe('GetCommentsFail', () => {
    it('should set isLoading to false and set errors', () => {
      const payload = fromTestModels.backendErrors;
      const action = new GetCommentsFail(payload);
      const state = commentsReducers(initialState, action);

      expect(state.isLoading).toBeFalse();
      expect(state.errors).toEqual(payload);
    });
  });

  describe('CreateComment', () => {
    it('should clear errors', () => {
      const payload = fromTestModels.commentCreateRequestMock;
      const action = new CreateComment(payload);
      const state = commentsReducers(initialState, action);

      expect(state.errors).toBeNull();
    });
  });

  describe('CreateCommentSuccess', () => {
    it('should set comments', () => {
      const payload = fromTestModels.commentMock;
      const expected = [ payload, ...initialState.comments ];
      const action = new CreateCommentSuccess(payload);
      const state = commentsReducers(initialState, action);

      expect(state.comments).toEqual(expected);
    });
  });

  describe('CreateCommentFail', () => {
    it('should set errors', () => {
      const payload = fromTestModels.backendErrors;
      const action = new CreateCommentFail(payload);
      const state = commentsReducers(initialState, action);

      expect(state.errors).toEqual(payload);
    });
  });

  describe('DeleteComment', () => {
    it('should clear errors', () => {
      const payload = fromTestModels.commentDeleteRequestMock;
      const action = new DeleteComment(payload);
      const state = commentsReducers(initialState, action);

      expect(state.errors).toBeNull();
    });
  });

  describe('DeleteCommentSuccess', () => {
    it('should set comments', () => {
      const payload = 1;
      const expected = initialState.comments;
      const action = new DeleteCommentSuccess(payload);
      const state = commentsReducers(initialState, action);

      expect(state.comments).toEqual(expected);
    });
  });

  describe('DeleteCommentFail', () => {
    it('should set errors', () => {
      const payload = fromTestModels.backendErrors;
      const action = new DeleteCommentFail(payload);
      const state = commentsReducers(initialState, action);

      expect(state.errors).toEqual(payload);
    });
  });
});
