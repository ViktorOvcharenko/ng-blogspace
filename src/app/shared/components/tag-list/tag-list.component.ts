import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input() tagList: fromSharedModels.Tag[];
  @Input() isFloatLeft: boolean;
}
