import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBannerComponent {
  @Input() profile: fromSharedModels.Profile;
  @Input() isSelf: boolean;

  get image(): string {
    return this.profile.image;
  }

  get username(): string {
    return this.profile.username;
  }

  get bio(): string {
    return this.profile.bio;
  }

  get isFollow(): boolean {
    return !this.profile.following;
  }
}
