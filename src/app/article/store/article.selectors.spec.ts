import {
  getArticle,
  getArticleErrors,
  getArticleIsFavoriteLoading,
  getArticleIsFollowLoading,
  getArticleIsLoading
} from './article.selectors';
import { initialArticleState } from './article.store';

import * as fromTestModels from '../../test/models';

describe('ArticleSelectors', () => {
  const appState = fromTestModels.appStateMock;
  const initialState = { ...initialArticleState };

  describe('getArticleIsLoading', () => {
    it('should get the isLoading', () => {
      expect(getArticleIsLoading(appState)).toBe(initialState.isLoading);
    });
  });

  describe('getArticleIsFollowLoading', () => {
    it('should get the isFollowLoading', () => {
      expect(getArticleIsFollowLoading(appState)).toBe(initialState.isFollowLoading);
    });
  });

  describe('getArticleIsFavoriteLoading', () => {
    it('should get the isFavoriteLoading', () => {
      expect(getArticleIsFavoriteLoading(appState)).toBe(initialState.isFavoriteLoading);
    });
  });

  describe('getArticle', () => {
    it('should get the isLoading', () => {
      expect(getArticle(appState)).toBe(initialState.article);
    });
  });

  describe('getArticleErrors', () => {
    it('should get the isLoading', () => {
      expect(getArticleErrors(appState)).toBe(initialState.errors);
    });
  });
});
