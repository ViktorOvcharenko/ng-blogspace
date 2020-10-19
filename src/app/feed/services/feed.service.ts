import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as fromFeedModels from '../models';
import * as fromSharedModels from '../../shared/models';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) { }

  getFeed(request: fromFeedModels.FeedRequest): Observable<fromFeedModels.FeedResponse> {
    let params = new HttpParams();

    if (request.tagParam) {
      params = params.append('tag', request.tagParam);
    }

    params = params.append('offset', request.paginationParams.offset.toString());
    params = params.append('limit', request.paginationParams.limit.toString());

    return this.http.get<fromFeedModels.FeedResponse>(request.url, { params });
  }
}
