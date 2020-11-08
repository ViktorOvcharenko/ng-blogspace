import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-comment-form',
  templateUrl: './article-comment-form.component.html',
  styleUrls: ['./article-comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCommentFormComponent implements OnInit {
  form: FormGroup;
  @Input() currentUser: fromSharedModels.CurrentUser;
  @Output() onAddComment: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  get currentUserImage(): string {
    return this.currentUser.image;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      body: ['', Validators.required],
    });
  }

  submit(): void {
    const commentBody = this.form.get('body').value;
    this.onAddComment.emit(commentBody);
    this.form.reset();
  }
}
