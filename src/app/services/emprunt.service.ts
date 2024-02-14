import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Adresse } from '../models/adresse';
import { Emprunt } from '../models/emprunt';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  getAll(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(`${this.baseUrl}/emprunts`);
  }
}
