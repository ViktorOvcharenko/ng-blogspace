import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-article-form-tag-list',
  templateUrl: './article-form-tag-list.component.html',
  styleUrls: ['./article-form-tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFormTagListComponent {
  @Input() tagList: fromSharedModels.Tag[];
  @Output() onDeleteTag: EventEmitter<number> = new EventEmitter<number>();

  deleteTag(index: number): void {
    console.log(index)
    this.onDeleteTag.emit(index);
  }
}
