import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromArticleModels from '../models';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) { }

  getComments(slug: string): Observable<fromSharedModels.Comment[]> {
    return this.http
      .get<fromArticleModels.CommentsResponse>(`${environment.apiUrl}/articles/${slug}/comments`)
      .pipe(map(response => response.comments));
  }

  deleteComment(request: fromArticleModels.CommentDeleteRequest): Observable<number> {
    const { slug, id } = request;
    return this.http
      .delete<void>(`${environment.apiUrl}/articles/${slug}/comments/${id}`)
      .pipe(map(() => id));
  }
}
