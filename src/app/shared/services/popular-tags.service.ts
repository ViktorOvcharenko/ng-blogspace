import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromSharedModels from '../models';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<fromSharedModels.Tag[]> {
    return this.http.get<fromSharedModels.PopularTagsResponse>(`${environment.apiUrl}/tags`)
      .pipe(map(response => response.tags));
  }
}
