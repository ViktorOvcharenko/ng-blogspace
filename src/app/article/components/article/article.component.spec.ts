import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';

import * as fromTestModels from '../../../test/models';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = fromTestModels.articleMock;
    fixture.detectChanges();
  });

  describe('articleBody', () => {
    it('should return articleBody', () => {
      expect(component.articleBody).toBe(component.article.body);
    });
  });

  describe('tagList', () => {
    it('should return tagList', () => {
      expect(component.tagList).toEqual(component.article.tagList);
    });
  });

  describe('deleteArticle', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = 'test';
      spyOn(component.onDeleteArticle, 'emit');
      component.deleteArticle(expected);
      expect(component.onDeleteArticle.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('follow', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = 'test';
      spyOn(component.onFollow, 'emit');
      component.follow(expected);
      expect(component.onFollow.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('unfollow', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = 'test';
      spyOn(component.onUnfollow, 'emit');
      component.unfollow(expected);
      expect(component.onUnfollow.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('handleLike', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = fromTestModels.addToFavoritesMock;
      spyOn(component.onHandleLike, 'emit');
      component.handleLike(expected);
      expect(component.onHandleLike.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('deleteComment', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = fromTestModels.commentDeleteRequestMock;
      spyOn(component.onDeleteComment, 'emit');
      component.deleteComment(0);
      expect(component.onDeleteComment.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('createComment', () => {
    it('should emit the onDeleteArticle', () => {
      const expected = fromTestModels.commentCreateRequestMock;
      spyOn(component.onCreateComment, 'emit');
      component.createComment('test');
      expect(component.onCreateComment.emit).toHaveBeenCalledWith(expected);
    });
  });
});
