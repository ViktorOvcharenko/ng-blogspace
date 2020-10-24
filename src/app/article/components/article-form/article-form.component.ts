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
  @Input() isLoading: boolean;
  @Input() errors: fromSharedModels.BackendErrors;
  @Output() onSubmit: EventEmitter<fromArticleModels.ArticleRequest> = new EventEmitter<fromArticleModels.ArticleRequest>();

  constructor(private fb: FormBuilder) { }

  get isDisabled(): boolean {
    return this.form.invalid || this.isLoading;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: this.initialValue.title,
      description: this.initialValue.description,
      body: this.initialValue.body,
      tagList: this.initialValue.tagList,
    });
  }

  submit(): void {
    const requestBody: fromArticleModels.ArticleRequest = { ...this.form.value };

    this.onSubmit.emit(requestBody);
  }
}
