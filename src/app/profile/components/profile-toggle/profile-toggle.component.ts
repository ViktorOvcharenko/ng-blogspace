import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-toggle',
  templateUrl: './profile-toggle.component.html',
  styleUrls: ['./profile-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileToggleComponent  {
  @Input() username: string;
}
