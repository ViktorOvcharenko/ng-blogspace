import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleFormComponent } from './article-form.component';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import * as fromTestModels from '../../../test/models';

describe('ArticleCommentFormComponent', () => {
  let component: ArticleFormComponent;
  let fixture: ComponentFixture<ArticleFormComponent>;

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
    component.initialValue = fromTestModels.articleRequestMock;
    fixture.detectChanges();
  })

  describe('ngOnInit', () => {
    it('should call initForm', () => {
      spyOn(component, 'initForm');
      component.ngOnInit();
      expect(component.initForm).toHaveBeenCalled();
    });
  });
});
