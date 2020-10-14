import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import * as fromFeedModels from '../../models';

@Component({
  selector: 'app-feed-global',
  templateUrl: './feed-global.component.html',
  styleUrls: ['./feed-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedGlobalComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() errors: string;
  @Input() feed: fromFeedModels.FeedResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
