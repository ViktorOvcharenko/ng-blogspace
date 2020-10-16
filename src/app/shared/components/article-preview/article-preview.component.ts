import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePreviewComponent  {
  @Input() article: fromSharedModels.Article;
}
