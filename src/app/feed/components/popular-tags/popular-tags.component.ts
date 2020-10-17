import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularTagsComponent  {
  @Input() isLoading: boolean;
  @Input() popularTags: fromSharedModels.Tag[];
  @Input() errors: string;
}
