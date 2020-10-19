import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromFeedModels from '../models';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<fromSharedModels.Tag[]> {
    return this.http.get<fromFeedModels.PopularTagsResponse>(`${environment.apiUrl}/tags`)
      .pipe(map(response => response.tags));
  }
}
