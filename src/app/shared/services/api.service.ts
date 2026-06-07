import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConfig } from '../api/api.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(path: string, options?: object): Observable<T> {
    return this.http.get<T>(`${apiConfig.baseUrl}${path}`, options);
  }

  post<T>(path: string, body: unknown, options?: object): Observable<T> {
    return this.http.post<T>(`${apiConfig.baseUrl}${path}`, body, options);
  }

  put<T>(path: string, body: unknown, options?: object): Observable<T> {
    return this.http.put<T>(`${apiConfig.baseUrl}${path}`, body, options);
  }

  delete<T>(path: string, options?: object): Observable<T> {
    return this.http.delete<T>(`${apiConfig.baseUrl}${path}`, options);
  }
}

