import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromSharedModels from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  limit: number =  environment.limit;
  currentPage: number;
  destroy$: Subject<void> = new Subject<void>();
  @Input() total: number;
  @Input() url: string[];
  @Output() onSelectPage: EventEmitter<fromSharedModels.PaginationParams> = new EventEmitter<fromSharedModels.PaginationParams>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  get pages(): number[] {
    const end = Math.ceil(this.total / this.limit);
    return [...Array(end).keys()].map( num => num + 1);
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.currentPage = parseInt(params.params.page) || 1;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectPage(page: number): void {
    const offset = this.limit * page - this.limit;
    const paginationParams: fromSharedModels.PaginationParams = {
      offset,
      limit: this.limit
    };

    this.onSelectPage.emit(paginationParams);
    this.router.navigate(this.url, { queryParams: { page } });
  }
}
