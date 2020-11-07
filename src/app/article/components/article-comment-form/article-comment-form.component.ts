import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-comment-form',
  templateUrl: './article-comment-form.component.html',
  styleUrls: ['./article-comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCommentFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      body: ['', Validators.required],
    });
  }

  submit(): void {

  }
}
