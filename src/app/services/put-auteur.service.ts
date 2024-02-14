import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class PutAuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  PutAuteurById(id: number, auteur: any): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.baseUrl}/auteurs/${id}`, auteur);
  }
}
