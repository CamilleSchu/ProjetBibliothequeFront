import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class PutDomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  PutDomaineById(id: number, domaine: any): Observable<Domaine> {
    return this.http.put<Domaine>(`${this.baseUrl}/domaines/${id}`, domaine);
  }
}
