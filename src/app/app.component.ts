import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCurrentUser } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
             <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetCurrentUser())
  }
}
