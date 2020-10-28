import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetProfile } from '../../store/profiel.actions';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import {
  getProfile,
  getProfileErrors,
  getProfileIsLoading
} from '../../store/profile.selectors';
import { getCurrentUser } from '../../../auth/store/auth.selectors';

import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  profile$: Observable<fromSharedModels.Profile>;
  errors$: Observable<fromSharedModels.BackendErrors>;
  isSelf$: Observable<boolean>;
  currentUser$: Observable<fromSharedModels.CurrentUser>;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(getProfileIsLoading));
    this.profile$ = this.store.pipe(select(getProfile));
    this.errors$ = this.store.pipe(select(getProfileErrors));
    this.currentUser$ = this.store.pipe(select(getCurrentUser));
    this.isSelf$ = combineLatest([this.profile$, this.currentUser$])
      .pipe(
        map(([profile, currentUser]) => {
          if (profile && currentUser) {
            return profile.username === currentUser.username;
          }
          return false;
        })
      );
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.fetchProfile(params.username);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchProfile(slug: string): void {
    this.store.dispatch(new GetProfile(slug));
  }
}
