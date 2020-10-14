import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import * as fromFeedModels from '../models';

@Injectable()
export class FeedService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<fromFeedModels.FeedResponse> {
    return this.http.get<fromFeedModels.FeedResponse>(`${this.apiUrl}${url}`);
  }
}
