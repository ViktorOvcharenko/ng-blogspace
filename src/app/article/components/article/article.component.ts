import { Component, Input } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent  {
  @Input() isLoading: boolean;
  @Input() article: fromSharedModels.Article;
  @Input() errors: fromSharedModels.BackendErrors;
}
