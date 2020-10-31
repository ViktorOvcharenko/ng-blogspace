import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() isLoading: boolean;
  @Input() profile: fromSharedModels.Profile;
  @Input() errors: fromSharedModels.BackendErrors;
  @Input() isSelf: boolean;
  @Output() onFollow: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnfollow: EventEmitter<string> = new EventEmitter<string>();

  get username(): string {
    return this.profile.username;
  }

  follow(event: string): void {
    this.onFollow.emit(event);
  }

  unfollow(event: string): void {
    this.onUnfollow.emit(event);
  }
}
