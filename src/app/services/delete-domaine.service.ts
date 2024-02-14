import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class DeleteDomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  DeleteById(id: number): Observable<Domaine> {
    return this.http.delete<Domaine>(`${this.baseUrl}/domaines/${id}`);
  }
}
