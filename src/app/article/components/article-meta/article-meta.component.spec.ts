import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleMetaComponent } from './article-meta.component';
import { TranslateModule } from '@ngx-translate/core';

import * as fromTestModels from '../../../test/models';

describe('ArticleMetaComponent', () => {
  let component: ArticleMetaComponent;
  let fixture: ComponentFixture<ArticleMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMetaComponent ],
      imports: [ TranslateModule.forRoot() ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMetaComponent);
    component = fixture.componentInstance;
    component.article = fromTestModels.articleMock;
    fixture.detectChanges();
  });

  describe('username', () => {
    it('should return username', () => {
      expect(component.username).toBe(component.article.author.username);
    });
  });

  describe('image', () => {
    it('should return image', () => {
      expect(component.image).toBe(component.article.author.image);
    });
  });

  describe('slug', () => {
    it('should return slug', () => {
      expect(component.slug).toBe(component.article.slug);
    });
  });

  describe('isFollow', () => {
    it('should return not following', () => {
      expect(component.isFollow).toBe(!component.article.author.following);
    });
  });

  describe('isFavorited', () => {
    it('should return favorited', () => {
      expect(component.isFavorited).toBe(component.article.favorited);
    });
  });

  describe('favoritesCount', () => {
    it('should return favoritesCount', () => {
      expect(component.favoritesCount).toBe(component.article.favoritesCount);
    });
  });

  describe('deleteArticle', () => {
    it('should emit onDeleteArticle', () => {
      spyOn(component.onDeleteArticle, 'emit');
      component.deleteArticle();
      expect(component.onDeleteArticle.emit).toHaveBeenCalledWith(component.slug);
    });
  });

  describe('follow', () => {
    it('should emit onFollow', () => {
      spyOn(component.onFollow, 'emit');
      component.follow();
      expect(component.onFollow.emit).toHaveBeenCalledWith(component.username);
    });
  });

  describe('unfollow', () => {
    it('should emit onUnfollow', () => {
      spyOn(component.onUnfollow, 'emit');
      component.unfollow();
      expect(component.onUnfollow.emit).toHaveBeenCalledWith(component.username);
    });
  });

  describe('handleLike', () => {
    it('should emit onHandleLike', () => {
      const expected = fromTestModels.addToFavoritesMock;
      spyOn(component.onHandleLike, 'emit');
      component.handleLike(expected);
      expect(component.onHandleLike.emit).toHaveBeenCalledWith(expected);
    });
  });
});
