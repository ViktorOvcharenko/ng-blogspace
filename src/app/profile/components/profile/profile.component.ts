import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  get username(): string {
    return this.profile.username;
  }
}
