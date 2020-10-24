import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import * as fromSharedModels from '../../shared/models';
import * as fromAuthModels from '../models';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  registration(data: fromAuthModels.RegistrationRequest): Observable<fromSharedModels.CurrentUser> {
    return this.http
      .post<fromAuthModels.AuthResponse>(`${environment.apiUrl}/users`, data)
      .pipe(map(this.getUser));
  }

  login(data: fromAuthModels.LoginRequest): Observable<fromSharedModels.CurrentUser> {
    return this.http
      .post<fromAuthModels.AuthResponse>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<fromSharedModels.CurrentUser> {
    return this.http
      .get<fromAuthModels.AuthResponse>(`${environment.apiUrl}/user`)
      .pipe(map(this.getUser));
  }

  getUser(response: fromAuthModels.AuthResponse): fromSharedModels.CurrentUser {
    return response.user;
  }
}
