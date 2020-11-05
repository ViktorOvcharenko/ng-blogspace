import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import * as fromSharedModels from '../../shared/models';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) { }

  getComments(slug: string): Observable<fromSharedModels.Comment[]> {
    return this.http
      .get<fromSharedModels.Comment[]>(`${environment.apiUrl}/articles/${slug}/comments`);
  }
}
