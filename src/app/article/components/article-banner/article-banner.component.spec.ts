import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleBannerComponent } from './article-banner.component';

import * as fromTestModels from '../../../test/models';

describe('ArticleBannerComponent', () => {
  let component: ArticleBannerComponent;
  let fixture: ComponentFixture<ArticleBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBannerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture =  TestBed.createComponent(ArticleBannerComponent);
    component = fixture.componentInstance;
    component.article = fromTestModels.articleMock;
    fixture.detectChanges();
  })

  describe('title', () => {
    it('should return title', () => {
      expect(component.title).toBe(component.article.title);
    });
  });

  describe('deleteArticle', () => {
    it('should emit onDeleteArticle', () => {
      const expected = 'test';
      spyOn(component.onDeleteArticle, 'emit');
      component.deleteArticle(expected)
      expect(component.onDeleteArticle.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('follow', () => {
    it('should emit onFollow', () => {
      const expected = 'test';
      spyOn(component.onFollow, 'emit');
      component.follow(expected)
      expect(component.onFollow.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('unfollow', () => {
    it('should emit onUnfollow', () => {
      const expected = 'test';
      spyOn(component.onUnfollow, 'emit');
      component.unfollow(expected)
      expect(component.onUnfollow.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('handleLike', () => {
    it('should emit onHandleLike', () => {
      const expected = fromTestModels.addToFavoritesMock;
      spyOn(component.onHandleLike, 'emit');
      component.handleLike(expected)
      expect(component.onHandleLike.emit).toHaveBeenCalledWith(expected);
    });
  });
});
