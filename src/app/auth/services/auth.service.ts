import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromModels from '../../shared/models';
import * as fromAuthModels from '../models';

@Injectable()
export class AuthService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registration(data: fromAuthModels.RegistrationRequest): Observable<fromModels.CurrentUser> {
      return this.http
        .post<fromAuthModels.AuthResponse>(`${this.apiUrl}/users`, data)
        .pipe(map(response => response.user));
  }
}
