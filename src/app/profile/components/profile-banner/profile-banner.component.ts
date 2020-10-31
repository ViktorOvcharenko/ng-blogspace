import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBannerComponent {
  @Input() isFollowLoading: boolean;
  @Input() profile: fromSharedModels.Profile;
  @Input() isSelf: boolean;
  @Output() onFollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnfollow: EventEmitter<string> = new EventEmitter<string>();

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

  follow(): void {
    this.onFollow.emit(this.profile.username);
  }

  unfollow(): void {
    this.onUnfollow.emit(this.profile.username);
  }
}
