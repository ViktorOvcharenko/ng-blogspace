import * as fromSharedModels from '../../shared/models';

export const appStateMock: fromSharedModels.AppState = {
  auth: {
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
    currentLanguage: null,
    validationErrors: null
  },
  article: {
    isLoading: false,
    isFollowLoading: false,
    isFavoriteLoading: false,
    article: null,
    errors: null,
  },
  comments: {
    isLoading: false,
    comments: [],
    errors: null,
  },
  feed: {
    isLoading: false,
    feed: null,
    errors: null,
  },
  popularTags: {
    isLoading: false,
    popularTags: null,
    errors: null,
    selectedTag: null,
  },
  profile: {
    isLoading: false,
    isFollowLoading: false,
    profile: null,
    errors: null,
  }
};
