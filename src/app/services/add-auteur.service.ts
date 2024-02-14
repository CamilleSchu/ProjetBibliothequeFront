import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AddAuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  postAll(auteur: any): Observable<Auteur> {
    return this.http.post<Auteur>(`${this.baseUrl}/auteurs`, auteur);
  }
  getAll(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}/auteurs`);
  }
}
