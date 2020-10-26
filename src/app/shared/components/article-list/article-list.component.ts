import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
  @Input() articles: fromSharedModels.Article[];
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

  handleLike(event: fromSharedModels.AddToFavorites): void {
    this.onHandleLike.emit(event);
  }
}
