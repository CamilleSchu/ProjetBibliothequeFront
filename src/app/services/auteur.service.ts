import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  getAll(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(`${this.baseUrl}/auteurs`);
  }
}
