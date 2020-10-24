import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feed-banner',
  templateUrl: './feed-banner.component.html',
  styleUrls: ['./feed-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedBannerComponent {}
