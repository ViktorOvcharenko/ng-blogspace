import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCommentComponent } from './article-comment.component';

import * as fromTestModels from '../../../test/models';

describe('ArticleCommentComponent', () => {
  let component: ArticleCommentComponent;
  let fixture: ComponentFixture<ArticleCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture =  TestBed.createComponent(ArticleCommentComponent);
    component = fixture.componentInstance;
    component.comment = fromTestModels.commentMock;
    fixture.detectChanges();
  });

  describe('body', () => {
    it('should return body', () => {
      expect(component.body).toBe(component.comment.body);
    });
  });

  describe('username', () => {
    it('should return username', () => {
      expect(component.username).toBe(component.comment.author.username);
    });
  });

  describe('authorImage', () => {
    it('should return image', () => {
      expect(component.authorImage).toBe(component.comment.author.image);
    });
  });

  describe('createdAt', () => {
    it('should return createdAt', () => {
      expect(component.createdAt).toBe(component.comment.createdAt);
    });
  });

  describe('commentId', () => {
    it('should return id', () => {
      expect(component.commentId).toBe(component.comment.id);
    });
  });

  describe('deleteComment', () => {
    it('should return id', () => {
      const expected = 0;
      spyOn(component.onDeleteComment, 'emit');
      component.deleteComment(expected);
      expect(component.onDeleteComment.emit).toHaveBeenCalledWith(expected);
    });
  });
});
