import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCommentFormComponent } from './article-comment-form.component';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import * as fromTestModels from '../../../test/models';

describe('ArticleCommentFormComponent', () => {
  let component: ArticleCommentFormComponent;
  let fixture: ComponentFixture<ArticleCommentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentFormComponent ],
      imports: [ TranslateModule.forRoot() ],
      providers: [ FormBuilder ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture =  TestBed.createComponent(ArticleCommentFormComponent);
    component = fixture.componentInstance;
    component.currentUser = fromTestModels.currentUserMock;
    fixture.detectChanges();
  })

  describe('currentUserImage', () => {
    it('should return image', () => {
      expect(component.currentUserImage).toBe(component.currentUser.image);
    });
  });

  describe('ngOnInit', () => {
    it('should call initForm', () => {
      spyOn(component, 'initForm');
      component.ngOnInit();
      expect(component.initForm).toHaveBeenCalled();
    });
  });

  describe('initForm', () => {
    it('should create the control body', () => {
      component.initForm();
      expect(component.form.controls['body']).toBeTruthy();
    });
  });

  describe('submit', () => {
    it('should emit onCreateComment', () => {
      const expected = 'test';
      spyOn(component.onCreateComment, 'emit');
      component.form.controls['body'].setValue(expected);
      component.submit();
      expect(component.onCreateComment.emit).toHaveBeenCalledWith(expected);
    });

    it('should call reset from form', () => {
      spyOn(component.form, 'reset');
      component.submit();
      expect(component.form.reset).toHaveBeenCalled();
    });
  });
});
