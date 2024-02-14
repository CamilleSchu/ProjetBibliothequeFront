import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class DetailAuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  fetchAuteurById(id: number): Observable<Auteur> {
    return this.http.get<Auteur>(`${this.baseUrl}/auteurs/${id}`);
  }
}
