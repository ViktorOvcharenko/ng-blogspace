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
});
