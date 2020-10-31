import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromArticleModels from '../models';
import * as fromSharedModels from '../../shared/models';
import * as fromProfileModels from '../../profile/models';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<fromSharedModels.Article> {
    return this.http
      .get<fromArticleModels.ArticleResponse>(`${environment.apiUrl}/articles/${slug}`)
      .pipe(map(response => response.article));
  }

  deleteArticle(slug: string): Observable<void> {
    return this.http
      .delete<void>(`${environment.apiUrl}/articles/${slug}`);
  }

  createArticle(requestBody: fromArticleModels.ArticleRequest): Observable<fromSharedModels.Article> {
    return this.http
      .post<fromArticleModels.ArticleResponse>(`${environment.apiUrl}/articles`, requestBody)
      .pipe(map(response => response.article));
  }

  updateArticle(requestData: fromArticleModels.ArticleRequest): Observable<fromSharedModels.Article> {
    return this.http
      .put<fromArticleModels.ArticleResponse>(`${environment.apiUrl}/articles/${requestData.slug}`, requestData)
      .pipe(map(response => response.article));
  }

  followUser(username: string): Observable<boolean> {
    return this.http.post<fromProfileModels.ProfileResponse>(`${environment.apiUrl}/profiles/${username}/follow`, {})
      .pipe(map(response => response.profile.following));
  }

  unfollowUser(username: string): Observable<boolean> {
    return this.http.delete<fromProfileModels.ProfileResponse>(`${environment.apiUrl}/profiles/${username}/follow`)
      .pipe(map(response => response.profile.following));
  }
}
