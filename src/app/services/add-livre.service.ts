import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Auteur } from '../models/auteur';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class AddLivreService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  postAll(livre: any): Observable<Livre> {
    return this.http.post<Livre>(`${this.baseUrl}/livres`, livre);
  }
  getAll(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/livres`);
  }
}
