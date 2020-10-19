import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss']
})
export class FeedToggleComponent {
  @Input() isLoggedIn: boolean;
  @Input() selectedTag: string;
}
