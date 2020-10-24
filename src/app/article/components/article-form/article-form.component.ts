import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  destroy$: Subject<void> = new Subject<void>();
  @Input() initialValue: fromArticleModels.ArticleRequest;
  @Input() isLoading: boolean;
  @Input() errors: fromSharedModels.BackendErrors;
  @Output() onSubmit: EventEmitter<fromArticleModels.ArticleRequest> = new EventEmitter<fromArticleModels.ArticleRequest>();

  constructor(private fb: FormBuilder) { }

  get isDisabled(): boolean {
    return this.form.invalid || this.isLoading;
  }

  get tagList(): fromSharedModels.Tag[] {
    return (this.form.get('tagList') as FormArray).controls
      .map(control => control.value);
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: this.initialValue.article.title,
      description: this.initialValue.article.description,
      body: this.initialValue.article.body,
      tagName: '',
      tagList: this.fb.array(this.initialValue.article.tagList),
    });
  }

  submit(): void {
    const requestBody: fromArticleModels.ArticleRequest = {
      article: {
        title: this.form.get('title').value,
        description: this.form.get('description').value,
        body: this.form.get('body').value,
        tagList: this.form.get('tagList').value,
      }
    };

    this.onSubmit.emit(requestBody);
  }

  addTag($event: FocusEvent): void {
    fromEvent($event.target, 'keydown')
      .pipe(
        filter((e: KeyboardEvent) => e.key === 'Enter'),
        takeUntil(this.destroy$)
      )
      .subscribe(d =>  {
        const control = this.fb.control((d.target as HTMLInputElement).value);
        (this.form.get('tagList') as FormArray).push(control);
        this.form.get('tagName').setValue('');
      });
  }
}
