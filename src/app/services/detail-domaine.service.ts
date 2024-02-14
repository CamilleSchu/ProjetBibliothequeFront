import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class DetailDomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  fetchDomaineById(id: number): Observable<Domaine> {
    return this.http.get<Domaine>(`${this.baseUrl}/domaines/${id}`);
  }
}