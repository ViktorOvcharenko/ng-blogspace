import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromSharedModels from '../../shared/models';
import * as fromProfileModels from '../models';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfile(slug: string): Observable<fromSharedModels.Profile> {
    return this.http.get<fromProfileModels.ProfileResponse>(`${environment.apiUrl}/profiles/${slug}`)
      .pipe(map(response => response.profile));
  }

  followUser(username: string): Observable<fromSharedModels.Profile> {
    return this.http.post<fromProfileModels.ProfileResponse>(`${environment.apiUrl}/profiles/${username}/follow`, {})
      .pipe(map(response => response.profile));
  }

  unfollowUser(username: string): Observable<fromSharedModels.Profile> {
    return this.http.delete<fromProfileModels.ProfileResponse>(`${environment.apiUrl}/profiles/${username}/follow`)
      .pipe(map(response => response.profile));
  }
}
