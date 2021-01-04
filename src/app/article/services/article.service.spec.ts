import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

import * as fromTestModels from '../../test/models';

describe('ArticleService', () => {
  let service: ArticleService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ArticleService ]
    });
    service = TestBed.inject(ArticleService);
    backend = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    backend.verify();
  });

  describe('getArticle', () => {
    it('should return an article', () => {
      const responseMock = fromTestModels.articleResponseMock;
      const expected = fromTestModels.articleMock;
      const slug = 'test';
      service.getArticle(slug).subscribe(response => {
        expect(response).toEqual(expected);
      });
      backend.expectOne({
        method: 'GET',
        url: `${environment.apiUrl}/articles/${slug}`,
      }).flush(responseMock);
    });
  });

  describe('deleteArticle', () => {
    it('should delete an article', () => {
      const slug = 'test';
      service.deleteArticle(slug).subscribe(response => {
        expect(response).toBeNull();
      });
      backend.expectOne({
        method: 'DELETE',
        url: `${environment.apiUrl}/articles/${slug}`,
      }).flush(null);
    });
  });

  describe('createArticle', () => {
    it('should create an article', () => {
      const responseMock = fromTestModels.articleResponseMock;
      const requestMock = fromTestModels.articleRequestMock;
      const expected = fromTestModels.articleMock;
      service.createArticle(requestMock).subscribe(response => {
        expect(response).toEqual(expected);
      });
      backend.expectOne({
        method: 'POST',
        url: `${environment.apiUrl}/articles`,
      }).flush(responseMock);
    });
  });

  describe('updateArticle', () => {
    it('should update an article', () => {
      const responseMock = fromTestModels.articleResponseMock;
      const requestMock = fromTestModels.articleRequestMock;
      const expected = fromTestModels.articleMock;
      service.updateArticle(requestMock).subscribe(response => {
        expect(response).toEqual(expected);
      });
      backend.expectOne({
        method: 'PUT',
        url: `${environment.apiUrl}/articles/${requestMock.slug}`,
      }).flush(responseMock);
    });
  });

  describe('followUser', () => {
    it('should follow to user', () => {
      const responseMock = fromTestModels.profileResponseMock;
      const requestMock = 'test';
      const expected = false;
      service.followUser(requestMock).subscribe(response => {
        expect(response).toBe(expected);
      });
      backend.expectOne({
        method: 'POST',
        url: `${environment.apiUrl}/profiles/${requestMock}/follow`,
      }).flush(responseMock);
    });
  });

  describe('unfollowUser', () => {
    it('should unfollow to user', () => {
      const responseMock = fromTestModels.profileResponseMock;
      const requestMock = 'test';
      const expected = false;
      service.unfollowUser(requestMock).subscribe(response => {
        expect(response).toBe(expected);
      });
      backend.expectOne({
        method: 'DELETE',
        url: `${environment.apiUrl}/profiles/${requestMock}/follow`,
      }).flush(responseMock);
    });
  });
});
