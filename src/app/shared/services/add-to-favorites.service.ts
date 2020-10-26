import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromArticleModels from '../../article/models';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) { }

  addToFavorites(slug: string): Observable<string> {
    return this.http
      .post<fromArticleModels.ArticleResponse>(`${environment.apiUrl}/articles/${slug}/favorite`, {})
      .pipe(map(response => response.article.slug));
  }

  removeFromFavorites(slug: string): Observable<string> {
    return this.http
      .delete<fromArticleModels.ArticleResponse>(`${environment.apiUrl}/articles/${slug}/favorite`)
      .pipe(map(response => response.article.slug));
  }
}
