import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleFormComponent } from './article-form.component';
import { FormArray, FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import * as fromTestModels from '../../../test/models';

describe('ArticleCommentFormComponent', () => {
  let component: ArticleFormComponent;
  let fixture: ComponentFixture<ArticleFormComponent>;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormComponent ],
      imports: [ TranslateModule.forRoot() ],
      providers: [ FormBuilder ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture =  TestBed.createComponent(ArticleFormComponent);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.initialValue = fromTestModels.articleRequestMock;
    fb = new FormBuilder();
    fixture.detectChanges();
  });

  describe('isDisabled', () => {
    it('should return invalid or isLoading', () => {
      expect(component.isDisabled).toBeFalse();
    });
  });

  describe('tagList', () => {
    it('should return tagList', () => {
      const expected = 'test';
      const control = fb.control(expected);
      component.initForm();
      (component.form.get('tagList') as FormArray).push(control);
      expect(component.tagList).toEqual([expected]);
    });
  });

  describe('ngOnInit', () => {
    it('should call initForm', () => {
      spyOn(component, 'initForm');
      component.ngOnInit();
      expect(component.initForm).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('should call next and complete from destroy$', () => {
      spyOn(component.destroy$, 'next');
      spyOn(component.destroy$, 'complete');

      component.ngOnDestroy();

      expect(component.destroy$.next).toHaveBeenCalled();
      expect(component.destroy$.complete).toHaveBeenCalled();
    });
  });

  describe('initForm', () => {
    it('should create form', () => {
      component.initForm();
      expect(component.form).toBeTruthy();
    });
  });

  describe('submit', () => {
    it('should emit onSubmit', () => {
      const expected = fromTestModels.articleRequestMock;
      spyOn(component.onSubmit, 'emit');
      component.submit();
      expect(component.onSubmit.emit).toHaveBeenCalledWith(expected);
    });
  });

  describe('deleteTag', () => {
    it('should remove tag from tagList', () => {
      const expected1 = 'test1';
      const expected2 = 'test2';
      component.initForm();
      (component.form.get('tagList') as FormArray).push(fb.control(expected1));
      (component.form.get('tagList') as FormArray).push(fb.control(expected2));
      component.deleteTag(0);
      expect(component.form.get('tagList').value).toEqual([expected2]);
    });
  });
});
