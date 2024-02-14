import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Lecteur } from '../models/lecteur';

@Injectable({
  providedIn: 'root'
})
export class LecteursService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
  }
 
  getAll(): Observable<Lecteur[]> {
    return this.http.get<Lecteur[]>(`${this.baseUrl}/lecteurs`);
  }
}