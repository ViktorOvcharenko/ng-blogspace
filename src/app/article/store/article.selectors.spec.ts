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

  it('should get the isLoading', () => {
    expect(getArticleIsLoading(appState)).toBe(initialState.isLoading);
  });

  it('should get the isFollowLoading', () => {
    expect(getArticleIsFollowLoading(appState)).toBe(initialState.isFollowLoading);
  });

  it('should get the isFavoriteLoading', () => {
    expect(getArticleIsFavoriteLoading(appState)).toBe(initialState.isFavoriteLoading);
  });

  it('should get the isLoading', () => {
    expect(getArticle(appState)).toBe(initialState.article);
  });

  it('should get the isLoading', () => {
    expect(getArticleErrors(appState)).toBe(initialState.errors);
  });
});
