import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean;
  @Input() isArticle: boolean;
  @Input() favoritesCount: number;
  @Input() slug: string;
  @Input() isFavoriteLoading: boolean;
  @Output() onHandleLike: EventEmitter<fromSharedModels.AddToFavorites> = new EventEmitter<fromSharedModels.AddToFavorites>();

  handleLike(): void {
    const event: fromSharedModels.AddToFavorites = {
      isFavorite: this.isFavorited,
      slug: this.slug
    };
    this.onHandleLike.emit(event);
  }
}
