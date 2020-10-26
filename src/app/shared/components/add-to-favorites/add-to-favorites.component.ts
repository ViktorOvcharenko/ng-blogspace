import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;

  handleLike(): void {

  }
}
