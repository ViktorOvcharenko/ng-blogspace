import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { authReducers } from './auth/store/auth.reducers';
import { feedReducers } from './feed/store/feed.reducers';
import { AuthEffects } from './auth/store/auth.effects';
import { FeedEffects } from './feed/store/feed.effects';

import * as fromAuthServices from './auth/services';
import * as fromSharedInterceptors from './shared/interceptors';
import * as fromFeedServices from './feed/services';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    StoreModule.forRoot({}),
    StoreModule.forFeature('auth', authReducers),
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forRoot([AuthEffects, FeedEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    fromAuthServices.AuthService,
    fromFeedServices.FeedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:fromSharedInterceptors.AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
