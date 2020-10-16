import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  limit: number =  environment.limit;
  @Input() total: number;
  @Input() currentPage: number;
  @Output() onSelectPage: EventEmitter<fromSharedModels.PaginationParams> = new EventEmitter<fromSharedModels.PaginationParams>();

  get pages(): number[] {
    const end = Math.ceil(this.total / this.limit);
    return [...Array(end).keys()].map( num => num + 1);
  }

  selectPage(page: number): void {
    const offset = this.limit * page - this.limit;
    const paginationParams: fromSharedModels.PaginationParams = {
      offset,
      limit: this.limit
    };

    this.onSelectPage.emit(paginationParams);
  }
}
