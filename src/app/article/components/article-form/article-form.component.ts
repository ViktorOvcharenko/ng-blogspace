import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  form: FormGroup;
  @Input() initialValue: fromArticleModels.ArticleRequest;
  @Input() isSubmitting: boolean;
  @Input() errors: fromSharedModels.BackendErrors;
  @Output() onSubmit: EventEmitter<fromArticleModels.ArticleRequest> = new EventEmitter<fromArticleModels.ArticleRequest>();

  constructor(private fb: FormBuilder) { }

  get isDisabled(): boolean {
    return this.form.invalid || this.isSubmitting;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: [this.initialValue.title, Validators.required],
      description: [this.initialValue.description, Validators.required],
      body: [this.initialValue.body, Validators.required],
      tagList: [this.initialValue.tagList, Validators.required],
    });
  }

  submit(): void {
    const requestBody: fromArticleModels.ArticleRequest = { ...this.form.value };

    this.onSubmit.emit(requestBody);
  }
}
