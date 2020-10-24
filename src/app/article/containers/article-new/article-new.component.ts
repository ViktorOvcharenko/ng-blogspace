import { Component, OnInit } from '@angular/core';

import * as fromArticleModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
})
export class ArticleNewComponent implements OnInit {
  initialValue: fromArticleModels.ArticleRequest = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };
  isSubmitting: boolean;
  errors: fromSharedModels.BackendErrors;

  constructor() { }

  ngOnInit(): void {
  }
}
