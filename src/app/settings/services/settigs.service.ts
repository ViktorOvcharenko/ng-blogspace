import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromSharedModels from '../../shared/models';
import * as fromSettingsModels from '../models';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  updateCurrentUser(requestBody: fromSettingsModels.CurrentUserRequest): Observable<fromSharedModels.CurrentUser> {
    return this.http.put<fromSettingsModels.CurrentUserResponse>(`${environment.apiUrl}/user`, requestBody)
      .pipe(map(this.getUser));
  }

  getUser(response: fromSettingsModels.CurrentUserResponse): fromSharedModels.CurrentUser {
    return response.user;
  }
}
